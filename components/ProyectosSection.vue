<template>
  <section id="proyectos" class="py-24 md:py-32 bg-white">
    <div class="container mx-auto px-6">
      <!-- Statistics Section -->
      <div class="relative rounded-3xl overflow-hidden mb-24 bg-black">
        <!-- Background Image -->
        <div class="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
            alt="Background" 
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Counters Grid -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-12 md:p-20 text-center text-white">
          <div v-for="(stat, index) in statistics" :key="index" class="flex flex-col items-center">
            <div class="text-5xl md:text-6xl font-bold mb-4 text-premium-blue">
              <span ref="counterRefs">{{ stat.initialValue }}</span>{{ stat.suffix }}
            </div>
            <p class="text-sm uppercase tracking-widest font-medium max-w-[200px]">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="text-4xl md:text-6xl font-serif mb-6">Proyectos Destacados</h2>
        <p class="text-gray-600 font-light text-lg">
          Descubra nuestra colección de desarrollos inmobiliarios exclusivos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink 
          v-for="(proyecto, index) in proyectos" 
          :key="proyecto.id"
          :to="`/proyectos/${proyecto.slug}`"
          class="group block"
        >
          <div class="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-100">
            <img 
              :src="proyecto.imagen" 
              :alt="proyecto.nombre"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            
            <div class="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-widest">
              {{ proyecto.estado }}
            </div>
          </div>

          <div>
            <div class="text-xs text-gray-500 uppercase tracking-widest mb-2">{{ proyecto.ubicacion }}</div>
            <h3 class="text-2xl font-serif font-medium mb-2 group-hover:text-premium-gold transition-colors">
              {{ proyecto.nombre }}
            </h3>
            <p class="text-gray-600 font-light text-sm line-clamp-2">
              {{ proyecto.descripcion }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { $gsap, $ScrollTrigger } = useNuxtApp()
const counterRefs = ref([])

const statistics = [
  { label: 'EDIFICIOS ENTREGADOS', value: 11, initialValue: 0, suffix: '' },
  { label: 'DEPARTAMENTOS ENTREGADOS', value: 894, initialValue: 0, suffix: '' },
  { label: 'METROS CUADRADOS CONSTRUIDOS', value: 49, initialValue: 0, suffix: 'K' },
  { label: 'METROS CUADRADOS EN CONSTRUCCIÓN', value: 13.4, initialValue: 0, suffix: 'K', isFloat: true }
]

const proyectos = [
  {
    id: 1,
    slug: 'torre-alvear',
    nombre: 'Torre Alvear',
    ubicacion: 'Recoleta, Buenos Aires',
    estado: 'En Construcción',
    descripcion: 'Residencias de lujo con vistas panorámicas a la ciudad y el río.',
    imagen: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    slug: 'residencias-libertador',
    nombre: 'Residencias Libertador',
    ubicacion: 'Belgrano, Buenos Aires',
    estado: 'Venta en Pozo',
    descripcion: 'Diseño contemporáneo y amenities de primer nivel en la mejor zona de Belgrano.',
    imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    slug: 'grand-bourg-suites',
    nombre: 'Grand Bourg Suites',
    ubicacion: 'Palermo Chico, Buenos Aires',
    estado: 'Terminado',
    descripcion: 'Exclusividad y confort en el corazón de Palermo Chico.',
    imagen: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
  }
]

onMounted(() => {
  // Statistics Counters Animation
  counterRefs.value.forEach((el, index) => {
    const stat = statistics[index]
    const obj = { val: 0 }
    
    $gsap.to(obj, {
      val: stat.value,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true // Animate only once
      },
      onUpdate: () => {
        if (el) {
          // Format number: if float, replace dot with comma for Spanish locale look if needed, or keep dot. 
          // The request image shows "13,4K", so we should use comma for decimal.
          let formatted = stat.isFloat 
            ? obj.val.toFixed(1).replace('.', ',') 
            : Math.round(obj.val)
          
          el.innerText = formatted
        }
      }
    })
  })
})

onUnmounted(() => {
  $ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.text-premium-blue {
  color: #00C2FF;
}
</style>
