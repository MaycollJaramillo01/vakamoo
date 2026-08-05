// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vakamoo.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
