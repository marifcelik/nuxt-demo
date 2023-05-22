// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  // @ts-ignore
  devtools: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: "Nuxt Demo - %s",
      meta: [
        { name: 'description', content: 'Nuxt 3 demo app' }
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }]
    }
  },
  css: ['@/assets/css/style.css'],
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'exact-active'
    }
  },
  runtimeConfig: {
    public: {
      'API_URL': '',
    }
  },
  // experimental: {
  //   typedPages: true
  // },
  vite: {
    publicDir: '../public'
  }
})
