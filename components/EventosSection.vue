<template>
  <section id="eventos" class="py-24 md:py-32 bg-premium-stone">
    <div class="container mx-auto px-6">
      <div ref="headerRef" class="text-center max-w-3xl mx-auto mb-20 opacity-0">
        <h2 class="text-4xl md:text-6xl font-serif mb-6">Eventos</h2>
        <p class="text-gray-600 font-light text-lg">
          Descubra nuestros próximos lanzamientos y eventos exclusivos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(evento, index) in eventos" 
          :key="evento.id"
          :ref="el => { if (el) eventoCards[index] = el }"
          class="group bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 opacity-0"
        >
          <!-- Media -->
          <div class="relative aspect-video overflow-hidden">
             <template v-if="evento.tipoMedia === 'video'">
                <iframe 
                  :src="evento.mediaUrl" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  class="w-full h-full absolute inset-0"
                ></iframe>
                <!-- Overlay to prevent interaction in preview if desired, or remove pointer-events-none -->
              </template>
              <template v-else>
                <div class="parallax-wrapper w-full h-full">
                  <img 
                    :ref="el => { if (el) eventoImages[index] = el }"
                    :src="evento.mediaUrl" 
                    :alt="evento.titulo"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </template>
          </div>
          
          <div class="p-8">
            <div class="flex justify-between items-center text-sm text-premium-gold uppercase tracking-widest mb-3">
              <span>{{ evento.fecha }}</span>
              <span>{{ evento.hora }}</span>
            </div>
            
            <h3 class="text-2xl font-serif font-medium mb-3">{{ evento.titulo }}</h3>
            
            <a 
              :href="evento.mapsLink" 
              target="_blank"
              class="flex items-center gap-2 text-xs text-gray-500 mb-4 hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {{ evento.lugar }}
            </a>

            <p class="text-gray-600 font-light leading-relaxed line-clamp-3">
              {{ evento.descripcion }}
            </p>
          </div>
        </div>
      </div>

      <!-- Button -->
      <div class="text-center">
        <NuxtLink 
          to="/eventos"
          class="inline-block px-8 py-4 border border-black text-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300"
        >
          Ver Todos los Eventos
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { $gsap, $ScrollTrigger } = useNuxtApp()
const { eventos } = useEventos()
const headerRef = ref(null)
const eventoCards = ref([])
const eventoImages = ref([])

onMounted(() => {
  // Fade in header
  $gsap.to(headerRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: headerRef.value,
      start: 'top 80%'
    }
  })

  // Stagger cards
  eventoCards.value.forEach((card, index) => {
    if (card) {
      $gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        }
      })
    }
  })

  // Parallax on images
  eventoImages.value.forEach((img) => {
    if (img && img.parentElement) {
      $gsap.to(img, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }
  })
})

onUnmounted(() => {
  $ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.parallax-wrapper {
  transform: translateY(0);
  will-change: transform;
}
</style>
