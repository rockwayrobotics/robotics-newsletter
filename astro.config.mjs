import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "vitesse-dark",
      wrap: false,
    },
  },
});
