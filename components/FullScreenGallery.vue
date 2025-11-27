<template>
  <div class="relative w-full h-[80vh] bg-black overflow-hidden group">
    <!-- Main Image Slider -->
    <div class="relative w-full h-full">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        ref="slides"
        class="absolute inset-0 w-full h-full opacity-0"
        :class="{ 'opacity-100 z-10': currentIndex === index }"
      >
        <img 
          :src="image" 
          class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out"
          :class="{ 'scale-110': currentIndex === index, 'scale-100': currentIndex !== index }"
        />
        <div class="absolute inset-0 bg-black/20"></div>
      </div>
    </div>

    <!-- Navigation Overlay -->
    <div 
      class="absolute inset-0 z-20 flex justify-between items-center px-4 md:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <button 
        @click="prevSlide" 
        class="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all transform hover:scale-110"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      
      <button 
        @click="nextSlide" 
        class="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all transform hover:scale-110"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>

    <!-- Indicators -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
      <button 
        v-for="(_, index) in images" 
        :key="index"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'"
      ></button>
    </div>

    <!-- Counter -->
    <div class="absolute top-8 right-8 z-20 text-white font-serif tracking-widest text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
      {{ currentIndex + 1 }} / {{ images.length }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const { $gsap } = useNuxtApp()
const currentIndex = ref(0)
const slides = ref([])
let touchStartX = 0
let touchEndX = 0

const nextSlide = () => {
  const next = (currentIndex.value + 1) % props.images.length
  animateSlide(next, 'next')
}

const prevSlide = () => {
  const prev = (currentIndex.value - 1 + props.images.length) % props.images.length
  animateSlide(prev, 'prev')
}

const goToSlide = (index) => {
  if (index === currentIndex.value) return
  const direction = index > currentIndex.value ? 'next' : 'prev'
  animateSlide(index, direction)
}

const animateSlide = (newIndex, direction) => {
  const currentSlideEl = slides.value[currentIndex.value]
  const nextSlideEl = slides.value[newIndex]

  // Reset next slide
  $gsap.set(nextSlideEl, { zIndex: 10, opacity: 0, scale: 1.1 })
  $gsap.set(currentSlideEl, { zIndex: 1 })

  // Animate
  const tl = $gsap.timeline({
    onComplete: () => {
      currentIndex.value = newIndex
      $gsap.set(currentSlideEl, { opacity: 0, zIndex: 0 })
    }
  })

  tl.to(nextSlideEl, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'power2.out'
  })
  .to(currentSlideEl, {
    scale: 1, // Slight zoom out effect for exit
    duration: 1,
    ease: 'power2.out'
  }, 0)
}

// Touch Handling
const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  if (touchEndX < touchStartX - 50) nextSlide()
  if (touchEndX > touchStartX + 50) prevSlide()
}

// Keyboard Navigation
const handleKeydown = (e) => {
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'ArrowLeft') prevSlide()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
