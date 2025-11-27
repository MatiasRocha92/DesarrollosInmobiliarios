<template>
  <section id="inicio" class="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
    <!-- Background Video with Parallax -->
    <div ref="videoContainer" class="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
      <video
        src="/public/videos/fondo.webm"
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover opacity-60"
      ></video>
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
      <h1 class="text-6xl md:text-8xl font-serif font-medium tracking-tight mb-6">
        Beltran Briones
      </h1>
      
      <p class="text-lg md:text-2xl font-light tracking-widest uppercase mb-12 text-white/90">
        Cofundador del Grupo Briones, una de las desarrolladoras inmobiliarias más importantes de la Ciudad de Buenos Aires
      </p>

      <button 
        @click="scrollToProyectos"
        class="group relative px-10 py-5 border border-white/30 overflow-hidden transition-all duration-300 hover:border-white"
      >
        <span class="relative z-10 text-sm uppercase tracking-[0.2em] group-hover:text-black transition-colors duration-300">
          Ver Proyectos
        </span>
        <div class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
      </button>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-4 cursor-pointer" @click="scrollToProyectos">
      <span class="text-[10px] uppercase tracking-widest">Scroll</span>
      <div class="w-[1px] h-16 bg-white/20 overflow-hidden">
        <div class="w-full h-full bg-white animate-scroll-line"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { $gsap, $ScrollTrigger } = useNuxtApp()
const videoContainer = ref(null)

const scrollToProyectos = () => {
  const proyectosSection = document.getElementById('proyectos')
  if (proyectosSection) {
    proyectosSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Parallax effect on video container
  $gsap.to(videoContainer.value, {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '#inicio',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  })
})

onUnmounted(() => {
  $ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
@keyframes scroll-line {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.animate-scroll-line {
  animation: scroll-line 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}
</style>