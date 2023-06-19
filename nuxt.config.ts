// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: ['~/assets/css/tailwind.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@vite-pwa/nuxt'
    ],
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
          name: 'Hayago Web',
          short_name: 'HayagoWeb',
          theme_color: '#ffffff',
          icons: [
            {
              src:  'image/pwa192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'image/512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'image/512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
            navigateFallback: '/',
            globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
        },
        client: {
            installPrompt: true,
            periodicSyncForUpdates: 3600,
        },
          devOptions: {
            enabled: true,
            suppressWarnings: true,
            navigateFallbackAllowlist: [/^\/$/],
            type: 'module',
        },
    },
    plugins: [{ src: '~/plugins/aos.client.js', mode: 'client' }, {src: '~/plugins/firebase.client.ts', mode: 'client'}],
    pages: true,
})
