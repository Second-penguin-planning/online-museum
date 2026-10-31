import { defineConfig } from 'astro/config';

// Vercel ではドメイン直下、GitHub Pages では /online-museum 配下で配信する
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  site: isVercel
    ? (process.env.SITE_URL ?? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? 'localhost'}`)
    : 'https://Second-penguin-planning.github.io',
  base: isVercel ? '/' : '/online-museum',
});
