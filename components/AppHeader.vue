<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    :class="{ 'bg-white/90 backdrop-blur-md shadow-sm py-4': isScrolled, 'bg-transparent py-6': !isScrolled }"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <NuxtLink 
        to="/" 
        class="text-2xl font-serif font-bold tracking-widest transition-colors duration-300"
        :class="isScrolled ? 'text-black' : 'text-white'"
      >
        BELTRÁN BRIONES
      </NuxtLink>

      <nav class="hidden md:flex items-center space-x-10">
        <NuxtLink
          v-for="link in links"
          :key="link.text"
          :to="link.to"
          class="text-sm uppercase tracking-widest font-medium relative group transition-colors duration-300"
          :class="isScrolled ? 'text-black' : 'text-white'"
        >
          {{ link.text }}
          <span 
            class="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
            :class="isScrolled ? 'bg-black' : 'bg-white'"
          ></span>
        </NuxtLink>
      </nav>

      <button 
        class="md:hidden z-50 transition-colors duration-300"
        :class="isScrolled ? 'text-black' : 'text-white'"
        @click="toggleMobileMenu"
      >
        <span class="sr-only">Menu</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const links = [
  { text: 'Inicio', to: '/#inicio' },
  { text: 'Eventos', to: '/#eventos' },
  { text: 'Prensa', to: '/#prensa' },
  { text: 'Proyectos', to: '/#proyectos' },
  { text: 'Contacto', to: '/#contacto' },
]

const toggleMobileMenu = () => {
  // TODO: Implement mobile menu
  console.log('Mobile menu toggle')
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
