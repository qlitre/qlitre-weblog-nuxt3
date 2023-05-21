const { API_KEY, SERVICE_DOMAIN, GA_ADSENSE_ID } = process.env;


export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: true,
    runtimeConfig: {
        apiKey: API_KEY,
        serviceDomain: SERVICE_DOMAIN
    },
    css: ['~/assets/scss/reset.scss', '~/assets/scss/common.scss',],
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/', '/404.html', '/200.html'],
        },
    },
    app: {
        pageTransition: { name: 'page', mode: 'default' }
    },
    modules: [
        ['@nuxtjs/google-adsense', {
            id: GA_ADSENSE_ID
        }],
    ],
    'google-adsense': {
        pageLevelAds: true,
    },
})
