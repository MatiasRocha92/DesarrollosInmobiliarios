<template>
  <div class="bg-white">
    <!-- Hero Simple -->
    <section class="relative py-32 bg-black text-white text-center">
      <div class="container mx-auto px-6 relative z-10">
        <h1 class="text-5xl md:text-7xl font-serif mb-6">Eventos Exclusivos</h1>
        <p class="text-xl font-light text-gray-300 max-w-2xl mx-auto">
          Experiencias únicas diseñadas para nuestra comunidad.
        </p>
      </div>
      <!-- Background subtle -->
      <div class="absolute inset-0 bg-premium-stone opacity-20"></div>
    </section>

    <!-- Events Grid -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <article 
            v-for="evento in eventos" 
            :key="evento.id"
            class="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <!-- Media (Image or Video) -->
            <div class="aspect-video w-full overflow-hidden bg-gray-100 relative">
              <template v-if="evento.tipoMedia === 'video'">
                <iframe 
                  :src="evento.mediaUrl" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  class="w-full h-full absolute inset-0"
                ></iframe>
              </template>
              <template v-else>
                <img 
                  :src="evento.mediaUrl" 
                  :alt="evento.titulo"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </template>
            </div>

            <!-- Content -->
            <div class="p-8">
              <!-- Date & Time -->
              <div class="flex items-center justify-between text-sm text-premium-gold uppercase tracking-widest mb-4">
                <span>{{ evento.fecha }}</span>
                <span>{{ evento.hora }}</span>
              </div>

              <h3 class="text-2xl font-serif font-medium mb-4 group-hover:text-premium-gold transition-colors">
                {{ evento.titulo }}
              </h3>

              <!-- Location -->
              <a 
                :href="evento.mapsLink" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-gray-500 mb-4 hover:text-black transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {{ evento.lugar }}
              </a>

              <p class="text-gray-600 font-light leading-relaxed mb-6">
                {{ evento.descripcion }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { eventos } = useEventos()

// SEO
useHead({
  title: 'Eventos - Beltran Brione',
  meta: [
    { name: 'description', content: 'Próximos eventos y lanzamientos exclusivos de Beltran Brione.' }
  ]
})
</script>
