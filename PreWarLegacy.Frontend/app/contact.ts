// functions/api/contact.ts
//
// Handles POST requests from the Contact page form:
//   1. Verifies the Turnstile token server-side.
//   2. Validates the submitted fields.
//   3. Sends the message to contact@prewarmagic.com via Resend.
//
// Required Cloudflare Pages environment variables (already set, Production
// and Preview):
//   - Turnstile_Secret_key   (note exact casing — case-sensitive)
//   - RESEND_API_KEY

/// <reference types="@cloudflare/workers-types" />

interface Env {
  Turnstile_Secret_key: string;
  RESEND_API_KEY: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  turnstileToken?: string;
}

const CONTACT_ADDRESS = 'contact@prewarmagic.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  const formData = new URLSearchParams();
  formData.append('secret', secret);
  formData.append('response', token);
  if (ip) formData.append('remoteip', ip);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const outcome = (await response.json()) as { success: boolean };
  return outcome.success === true;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  const { name, email, subject, message, turnstileToken } = payload;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return jsonResponse({ error: 'All fields are required.' }, 400);
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return jsonResponse({ error: 'Please provide a valid email address.' }, 400);
  }

  if (!turnstileToken) {
    return jsonResponse({ error: 'Verification failed. Please try again.' }, 400);
  }

  const clientIp = request.headers.get('CF-Connecting-IP');
  const turnstileOk = await verifyTurnstile(turnstileToken, env.Turnstile_Secret_key, clientIp);

  if (!turnstileOk) {
    return jsonResponse({ error: 'Verification failed. Please try again.' }, 400);
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Sender address on the verified prewarmagic.com domain. Doesn't need
      // to be a real mailbox — it's a From label only. Reply-to below routes
      // actual replies to the visitor, not to this address.
      from: 'Pre-War Contact Form <noreply@prewarmagic.com>',
      to: [CONTACT_ADDRESS],
      reply_to: email.trim(),
      subject: `[Pre-War Contact] ${subject.trim()}`,
      text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
    }),
  });

  if (!resendResponse.ok) {
    const errBody = await resendResponse.text();
    console.error('Resend API error:', errBody);
    return jsonResponse({ error: 'The message could not be sent. Please try again later.' }, 502);
  }

  return jsonResponse({ success: true }, 200);
};
