import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://codempanada.github.io",
    base: "codempanada",
    publicDir: "public",
    output: "static",
    trailingSlash: 'ignore',
    compressHTML: true,
    integrations: [],
});
