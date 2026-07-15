import { defineConfig } from 'astro/config';

for (const [current, legacy] of [
  ['PUBLIC_EMAILJS_SERVICE_ID', 'VITE_SERVICE_iD'],
  ['PUBLIC_EMAILJS_TEMPLATE_ID', 'VITE_TEMPLATE_ID'],
  ['PUBLIC_EMAILJS_PUBLIC_KEY', 'VITE_PUBLIC_KEY'],
]) {
  if (!process.env[current] && process.env[legacy]) process.env[current] = process.env[legacy];
}

export default defineConfig({
  output: 'static',
  site: 'https://www.luher.tech',
});
