// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  nitro: {
    preset: 'github_pages'
  },
  css: ['~/assets/css/main.css'],
  app: {
    // replace with '/your-repo/' if using project pages
    baseURL: '/',
    head: {
      title: 'Suharsh Tyagi – Portfolio',
      meta: [
        { name: 'description', content: 'Full-stack & DevOps engineer – Nuxt, React, K8s, AWS' }
      ]
    }
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui'
  ]
})