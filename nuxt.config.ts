// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    modules: ['@nuxtjs/tailwindcss'],
    plugins: [{ src: '~/plugins/aos.client.js', mode: 'client' }],
    pages: true,
})
