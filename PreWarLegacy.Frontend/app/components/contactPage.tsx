import { useEffect, useRef, useState} from 'react';
import "../ContactPage.css"

import type { FormEvent } from "react";

// Public by design — safe to commit, safe to expose in the browser.
const TURNSTILE_SITE_KEY = '0x4AAAAAADw9vZoANTEQdJ6W';

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');

  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Load the Turnstile script once and render the widget into turnstileRef.
  useEffect(() => {
    const scriptId = 'cf-turnstile-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    const renderWidget = () => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
          'error-callback': () => setTurnstileToken(''),
        });
      }
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    // Script may still be loading (e.g. on fast client-side nav) — poll briefly.
    const interval = setInterval(() => {
      if (window.turnstile) {
        renderWidget();
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const resetTurnstile = () => {
    if (window.turnstile && widgetIdRef.current) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setTurnstileToken('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus('error');
      setErrorMessage('Please complete the verification check before sending.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, turnstileToken }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof data?.error === 'string' ? data.error : 'The message could not be sent. Please try again.'
        );
      }

      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      resetTurnstile();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'The message could not be sent. Please try again.'
      );
      resetTurnstile();
    }
  };

  return (
    <section className="contact-page">

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="contact-form__turnstile" ref={turnstileRef} />

        {status === 'error' && (
          <p className="contact-form__message contact-form__message--error" role="alert">
            {errorMessage}
          </p>
        )}

        {status === 'success' && (
          <p className="contact-form__message contact-form__message--success" role="status">
            Your message has been sent. Thanks for reaching out.
          </p>
        )}

        <button type="submit" className="contact-form__submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </section>
  );
}
