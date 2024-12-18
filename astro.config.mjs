import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://jn4avarro.github.io',
  base: '/portafolio',
  build: {
    outDir: './dist' 
  }
})