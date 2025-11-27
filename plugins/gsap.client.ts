import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
