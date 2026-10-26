import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://zerocruft.pages.dev',
  trailingSlash: 'never',
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    sitemap(),
    mdx(),
  ],
});
