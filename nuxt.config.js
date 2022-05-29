
export default {

    globals: {
        //id: 'page', // replacing __nuxt
        //context: '__FAJITAS__', // replacing __NUXT__
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Uplord',
        htmlAttrs: {
            lang: 'en',
            class: 'light'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'color-scheme', content: 'light' },
            { name: 'supported-color-schemes', content: 'light' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        bodyAttrs: {
            class: ''
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/style.less'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
  }
