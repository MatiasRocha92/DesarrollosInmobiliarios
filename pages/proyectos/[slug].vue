<template>
  <div class="bg-white min-h-screen">
    <!-- Gallery Section -->
    <div class="relative">
      <FullScreenGallery :images="proyecto.galeria" />
      
      <!-- Back Button -->
      <NuxtLink 
        to="/#proyectos"
        class="absolute top-8 left-8 z-30 p-4 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/40 text-white transition-all group"
      >
        <svg class="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </NuxtLink>
    </div>

    <!-- Project Details -->
    <div class="container mx-auto px-6 py-20">
      <!-- Header -->
      <div class="max-w-4xl mx-auto mb-16">
        <div ref="categoryRef" class="text-sm text-premium-gold uppercase tracking-widest mb-4 opacity-0">
          {{ proyecto.tipo }}
        </div>
        <h1 ref="titleRef" class="text-5xl md:text-7xl font-serif font-medium mb-6 opacity-0">
          {{ proyecto.nombre }}
        </h1>
        <p ref="locationRef" class="text-xl text-gray-600 font-light opacity-0">
          <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {{ proyecto.ubicacion }}
        </p>
      </div>

      <!-- Stats Grid -->
      <div ref="statsRef" class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20 opacity-0">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="text-center p-8 bg-premium-stone"
        >
          <div class="text-4xl md:text-5xl font-serif font-medium mb-2 text-premium-gold">
            <span ref="counterRefs" :data-target="stat.value">0</span>{{ stat.suffix }}
          </div>
          <div class="text-sm uppercase tracking-widest text-gray-600">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Description -->
      <div class="max-w-4xl mx-auto mb-20">
        <div ref="descriptionRef" class="prose prose-lg max-w-none opacity-0">
          <h2 class="text-3xl font-serif font-medium mb-6">Descripción del Proyecto</h2>
          <p class="text-gray-600 font-light leading-relaxed text-lg mb-6">
            {{ proyecto.descripcionDetallada }}
          </p>
          <p class="text-gray-600 font-light leading-relaxed text-lg">
            {{ proyecto.descripcionAdicional }}
          </p>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="max-w-5xl mx-auto mb-20">
        <h2 ref="featuresTitle" class="text-3xl font-serif font-medium mb-12 text-center opacity-0">
          Características y Amenities
        </h2>
        <div ref="featuresGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0">
          <div 
            v-for="(feature, index) in proyecto.caracteristicas" 
            :key="index"
            class="flex items-start space-x-4 p-6 bg-white border border-gray-200 hover:border-premium-gold transition-colors"
          >
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-premium-gold/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-premium-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium mb-1">{{ feature.titulo }}</h3>
              <p class="text-sm text-gray-600 font-light">{{ feature.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div ref="ctaRef" class="max-w-4xl mx-auto text-center py-16 px-8 bg-black text-white opacity-0">
        <h2 class="text-4xl font-serif font-medium mb-6">¿Interesado en este proyecto?</h2>
        <p class="text-xl text-gray-400 font-light mb-8">
          Contactanos para recibir más información y agendar una visita personalizada.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            :href="proyecto.linkProyecto" 
            target="_blank"
            class="group relative px-10 py-5 border border-white/30 overflow-hidden transition-all duration-300 hover:border-white"
          >
            <span class="relative z-10 text-sm uppercase tracking-[0.2em] group-hover:text-black transition-colors duration-300">
              Ir al Proyecto
            </span>
            <div class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
          </a>
          <NuxtLink 
            to="/#contacto"
            class="px-10 py-5 bg-premium-gold text-black text-sm uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300"
          >
            Contactar Ahora
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const route = useRoute()
const { $gsap } = useNuxtApp()

// Refs for animations
const categoryRef = ref(null)
const titleRef = ref(null)
const locationRef = ref(null)
const statsRef = ref(null)
const counterRefs = ref([])
const descriptionRef = ref(null)
const featuresTitle = ref(null)
const featuresGrid = ref(null)
const ctaRef = ref(null)

// Mock data - En producción vendría de una API o CMS
const proyectos = {
  'torre-ejecutiva-central': {
    nombre: 'Torre Ejecutiva Central',
    tipo: 'Oficinas Corporativas',
    ubicacion: 'Distrito Financiero, Buenos Aires',
    descripcionDetallada: 'Torre Ejecutiva Central representa la nueva generación de espacios de trabajo corporativos. Con 35 pisos de oficinas clase A+ y tecnología de punta, este desarrollo ofrece espacios flexibles que se adaptan a las necesidades de empresas modernas que buscan excelencia en cada detalle.',
    descripcionAdicional: 'El edificio cuenta con certificación LEED Gold, sistemas de climatización inteligente, seguridad 24/7 con tecnología biométrica, y una ubicación privilegiada en el corazón del distrito financiero con acceso directo a transporte público y principales avenidas.',
    linkProyecto: 'https://ejemplo.com/torre-ejecutiva',
    galeria: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000&auto=format&fit=crop'
    ],
    caracteristicas: [
      { titulo: 'Superficie Total', descripcion: '45,000 m² de construcción' },
      { titulo: 'Pisos de Oficinas', descripcion: '35 niveles corporativos' },
      { titulo: 'Estacionamiento', descripcion: '250 cocheras cubiertas' },
      { titulo: 'Lobby Premium', descripcion: 'Doble altura con recepción 24/7' },
      { titulo: 'Terraza Ejecutiva', descripcion: 'Espacio de coworking en piso 35' },
      { titulo: 'Gimnasio', descripcion: 'Equipamiento de última generación' },
      { titulo: 'Salas de Reunión', descripcion: '12 salas equipadas con tecnología' },
      { titulo: 'Cafetería Premium', descripcion: 'Servicio de catering y coffee bar' },
      { titulo: 'Seguridad Biométrica', descripcion: 'Control de acceso inteligente' }
    ],
    stats: {
      superficie: 45000,
      unidades: 120,
      pisos: 35,
      cocheras: 250
    }
  },
  'residencial-park-view': {
    nombre: 'Residencial Park View',
    tipo: 'Residencial de Lujo',
    ubicacion: 'Zona Premium Norte, Buenos Aires',
    descripcionDetallada: 'Residencial Park View es un complejo de departamentos de lujo que redefine el concepto de vida premium. Con unidades de 1 a 4 ambientes, cada espacio ha sido diseñado con atención al detalle, materiales de primera calidad y vistas panorámicas a espacios verdes.',
    descripcionAdicional: 'El complejo ofrece más de 2,000 m² de amenities que incluyen piscina climatizada, spa, gimnasio, salón de usos múltiples, playroom, y espacios verdes diseñados por paisajistas de renombre. Seguridad 24/7 y servicio de concierge para una experiencia de vida sin igual.',
    linkProyecto: 'https://ejemplo.com/park-view',
    galeria: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2000&auto=format&fit=crop'
    ],
    caracteristicas: [
      { titulo: 'Unidades Disponibles', descripcion: '1, 2, 3 y 4 ambientes' },
      { titulo: 'Superficie Unidades', descripcion: 'Desde 45 m² hasta 180 m²' },
      { titulo: 'Piscina Climatizada', descripcion: 'Infinity pool con solárium' },
      { titulo: 'Spa & Wellness', descripcion: 'Sauna, jacuzzi y sala de masajes' },
      { titulo: 'Gimnasio Equipado', descripcion: 'Máquinas de última generación' },
      { titulo: 'Salón de Fiestas', descripcion: 'Capacidad para 80 personas' },
      { titulo: 'Playroom', descripcion: 'Espacio de juegos para niños' },
      { titulo: 'Cocheras Cubiertas', descripcion: 'Una por unidad + bauleras' },
      { titulo: 'Seguridad 24/7', descripcion: 'Vigilancia y monitoreo constante' }
    ],
    stats: {
      superficie: 12000,
      unidades: 80,
      pisos: 18,
      cocheras: 95
    }
  }
}

const proyecto = computed(() => {
  const slug = route.params.slug
  return proyectos[slug] || proyectos['torre-ejecutiva-central']
})

const stats = computed(() => [
  { value: proyecto.value.stats.superficie, suffix: 'm²', label: 'Superficie Total' },
  { value: proyecto.value.stats.unidades, suffix: '', label: 'Unidades' },
  { value: proyecto.value.stats.pisos, suffix: '', label: 'Pisos' },
  { value: proyecto.value.stats.cocheras, suffix: '', label: 'Cocheras' }
])

// Animated Counter
const animateCounter = (element) => {
  const target = parseInt(element.dataset.target)
  const duration = 2
  
  $gsap.to({ val: 0 }, {
    val: target,
    duration: duration,
    ease: 'power2.out',
    onUpdate: function() {
      element.textContent = Math.floor(this.targets()[0].val).toLocaleString()
    }
  })
}

onMounted(() => {
  // Scroll to top
  window.scrollTo(0, 0)

  // Create animation timeline
  const tl = $gsap.timeline({
    defaults: { ease: 'power3.out' }
  })

  // Animate header elements
  tl.fromTo(categoryRef.value, 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(titleRef.value,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=0.6'
  )
  .fromTo(locationRef.value,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=0.6'
  )

  // Animate stats with counters
  tl.fromTo(statsRef.value,
    { y: 40, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8,
      onComplete: () => {
        // Start counter animations
        counterRefs.value.forEach(counter => {
          if (counter) animateCounter(counter)
        })
      }
    },
    '-=0.4'
  )

  // Animate description
  tl.fromTo(descriptionRef.value,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=0.4'
  )

  // Animate features
  tl.fromTo(featuresTitle.value,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=0.4'
  )
  .fromTo(featuresGrid.value,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=0.6'
  )

  // Animate CTA
  tl.fromTo(ctaRef.value,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=0.4'
  )
})

// SEO
useHead({
  title: `${proyecto.value.nombre} - Beltran Brione`,
  meta: [
    { name: 'description', content: proyecto.value.descripcionDetallada }
  ]
})
</script>
