import tailwindTypography from '@tailwindcss/typography'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  css: ['@/assets/css/style.css'],
  modules: ['@nuxtjs/tailwindcss'],
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'exact-active'
    }
  },
  tailwindcss: {
    // @ts-ignore
    config: {
      plugins: [tailwindTypography]
    }
  }
})
