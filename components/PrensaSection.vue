<template>
  <section id="prensa" class="py-24 md:py-32 bg-white">
    <div class="container mx-auto px-6">
      <div ref="headerRef" class="text-center max-w-3xl mx-auto mb-20 opacity-0">
        <h2 class="text-4xl md:text-6xl font-serif mb-6">Prensa</h2>
        <p class="text-gray-600 font-light text-lg">
          Últimas noticias y comunicados de prensa.
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-12 mb-16">
        <article 
          v-for="(noticia, index) in noticias.slice(0, 3)" 
          :key="noticia.id"
          :ref="el => { if (el) noticiaCards[index] = el }"
          class="border-b border-gray-200 pb-12 last:border-0 opacity-0"
        >
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3">
              <div class="aspect-[4/3] overflow-hidden relative bg-gray-100">
                <template v-if="noticia.tipoMedia === 'video'">
                  <iframe 
                    :src="noticia.mediaUrl" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    class="w-full h-full absolute inset-0"
                  ></iframe>
                </template>
                <template v-else>
                  <div class="parallax-wrapper w-full h-full">
                    <img 
                      :ref="el => { if (el) noticiaImages[index] = el }"
                      :src="noticia.mediaUrl" 
                      :alt="noticia.titulo"
                      class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </template>
              </div>
            </div>
            <div class="md:w-2/3">
              <div class="text-sm text-gray-500 uppercase tracking-widest mb-3">
                {{ noticia.fecha }} • {{ noticia.categoria }}
              </div>
              <h3 class="text-3xl font-serif font-medium mb-4">{{ noticia.titulo }}</h3>
              <p class="text-gray-600 font-light leading-relaxed mb-6">
                {{ noticia.extracto }}
              </p>
              <!-- 'Leer Más' button removed as requested -->
            </div>
          </div>
        </article>
      </div>

      <!-- Button -->
      <div class="text-center">
        <NuxtLink 
          to="/prensa"
          class="inline-block px-8 py-4 border border-black text-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300"
        >
          Ver Todas las Noticias
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { $gsap, $ScrollTrigger } = useNuxtApp()
const { noticias } = usePrensa()
const headerRef = ref(null)
const noticiaCards = ref([])
const noticiaImages = ref([])

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

  // Stagger articles
  noticiaCards.value.forEach((card, index) => {
    if (card) {
      $gsap.to(card, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        }
      })
    }
  })

  // Parallax on images
  noticiaImages.value.forEach((img) => {
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
