# Luis Herrera Portfolio

A bilingual, static portfolio built with Astro and TypeScript. The complete portfolio is available at `/`, `/about/`, and `/projects/`; the latter routes open at their corresponding sections without requiring an SPA fallback.

## Development

```bash
npm install
npm run dev
```

Quality and production checks:

```bash
npm run check
npm run build
npm run preview
```

## Contact Form

The contact form uses EmailJS when these public build-time variables are present:

```dotenv
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Without them, the page remains readable and the private contact form reports that sending is temporarily unavailable.
Existing deployment environments may keep using `VITE_SERVICE_iD`, `VITE_TEMPLATE_ID`, and `VITE_PUBLIC_KEY`; Astro maps them at build time, and the `PUBLIC_EMAILJS_*` names above take precedence.

## Architecture

- Astro renders independent static HTML routes and reusable sections.
- `src/data/portfolio.ts` owns typed, runtime-validated bilingual content.
- A small client script handles language persistence, active navigation, mobile-menu accessibility, reveal effects, and form submission.
- Content is isolated from presentation so a future read-only backend adapter can replace the local source without changing the sections.

## License

[MIT](LICENSE), created by [Luis Herrera](https://github.com/LuHer18).
