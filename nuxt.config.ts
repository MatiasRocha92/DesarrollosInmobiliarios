// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false, // Static Generation / SPA mode
  compatibilityDate: '2025-11-26',
  devtools: { enabled: true },
  
  imports: {
    autoImport: true
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  site: {
    url: 'https://beltranbriones.com',
    name: 'Beltrán Briones',
  },

  sitemap: {
    sources: [
      '/api/sitemap' // Optional: if we had dynamic routes from an API
    ]
  },

  css: [
    '~/assets/css/main.css'
  ],

  build: {
    transpile: ['gsap']
  },

  vite: {
    optimizeDeps: {
      exclude: ['@studio-freight/lenis']
    }
  },

  googleFonts: {
    families: {
      'Outfit': [300, 400, 500, 600],
      'Playfair Display': [400, 500, 600, 700]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    subsets: ['latin', 'latin-ext']
  },

  app: {
    head: {
      title: 'Beltrán Briones | Desarrollos Inmobiliarios',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Desarrollos inmobiliarios de lujo y arquitectura moderna. Beltran Brione redefine el concepto de vida premium.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:site_name', content: 'Beltran Brione' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Beltran Brione | Premium Real Estate' },
        { property: 'og:description', content: 'Desarrollos inmobiliarios de lujo y arquitectura moderna. Beltran Brione redefine el concepto de vida premium.' },
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1600596542815-2495db9a9cf6?q=80&w=2500&auto=format&fit=crop' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Beltran Brione | Premium Real Estate' },
        { name: 'twitter:description', content: 'Desarrollos inmobiliarios de lujo y arquitectura moderna.' },
        { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1600596542815-2495db9a9cf6?q=80&w=2500&auto=format&fit=crop' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icons/icons8-b-16.png' },
        { rel: 'canonical', href: 'https://beltranbrione.com' }
      ]
    }
    // Removed CSS-based pageTransition to handle it with GSAP in app.vue
  }
} as any)