import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://codempanada.github.io",
    base: "/",
    output: "static",
    redirects:{
        '/': "/.github",
        '/codempanada': '/.github',
        'other': {
            status: 302,
            destination: "/.github",
        }
    }
});
