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
  site: {
    url: 'https://suharshh.com',
    name: 'Suharshh Tyagi',
    description: 'Full-stack & DevOps engineer – portfolio'
  },
  nitro: {
    preset: 'github_pages'
  },
  css: ['~/assets/css/main.css'],
  app: {
    // replace with '/your-repo/' if using project pages
    baseURL: '/',
    head: {
      title: 'Suharsh Tyagi – Full-stack & DevOps engineer. | Suharshh.com',
      meta: [
        { name: 'description', content: 'Portfolio of Suharshh – Vue, React, Kubernetes, AWS.' }
      ]
    }
  },
  seo: {
    siteUrl: 'https://suharshh.com',
    canonical: true,
    ogTitle: true,
    ogDescription: true,
    sitemap: { autoLastmod: true }
  },


  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/seo'
  ]
})