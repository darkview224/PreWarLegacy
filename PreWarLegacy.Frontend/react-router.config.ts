import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender: true,
  future: {
    v8_middleware: true,
    v8_passThroughRequests: true,
    v8_splitRouteModules: true,
    // Disabled: in this React Router/Vite version combo, this flag breaks
    // static prerendering for every route except "/" once the app has more
    // than one route — the build silently writes the loading shell instead
    // of real HTML for those routes (no error, so it goes unnoticed).
    v8_trailingSlashAwareDataRequests: false,
    v8_viteEnvironmentApi: true,
  },
} satisfies Config;
