export default {
  // ssr: false,
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Tiki-taka',
    title: 'Tiki-taka',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
    ],
  },

  css: ['~assets/sass/index.sass'],

  plugins: [
    '~mixin/index',
    '~plugins/api/axios',
    '~plugins/i18n',
    '~plugins/alertMe',
    { src: '~plugins/services/router-auth', mode: 'client' },
  ],

  components: [
    '~components/common/',
    '~components/common/vuetify',
    '~components/utils/',
    '~components/user/',
    '~components/layout/',
    '~components/navigation-tabs/',
    '~components/navigation-tabs/auctions',
    '~components/navigation-tabs/seller-space',
    '~components/navigation-tabs/seller-space/my-sales',
    '~components/navigation-tabs/seller-space/ads',
    '~components/navigation-tabs/seller-space/payment-method',
    '~components/navigation-tabs/purchase',
    '~components/navigation-tabs/method-of-payment',
    '~components/navigation-tabs/purchase-summary',
  ],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: [
    '@nuxtjs/dayjs',
    'nuxt-webfontloader',
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  axios: {
    baseURL: '/wp/',
    proxy: true,
  },

  proxy: {
    '/wp/': {
      target: 'http://marketplace.prod.tiki-taka.fr/wp-json',
      pathRewrite: { '^/wp/': '' },
    },
  },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.js',
      },
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      silentTranslationWarn: true,
    },
    loadLanguagesAsync: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
    vueI18nLoader: true,
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  vuetify: {
    customVariables: ['~/assets/sass/variables.scss'],
    // treeShake: true,
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      themes: {
        light: {
          primary: '#041E42',
          secondary: '#CB1B38',
          wall: '#fff',
          darkRed: '#CB1B38',
          info: '#fff',
          warning: '#fff',
          error: '#CB1B38',
          success: '#fff',
        },
      },
      defaultAssets: false,
    },
  },

  webfontloader: {
    google: {
      families: ['Lato:300,400,700,900'] /*,700,800,900*/,
    },
  },

  build: {
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
  },
}
