<template>
  <div class="bg-white">
    <!-- Hero Simple -->
    <section class="relative py-32 bg-black text-white text-center">
      <div class="container mx-auto px-6 relative z-10">
        <h1 class="text-5xl md:text-7xl font-serif mb-6">Prensa & Noticias</h1>
        <p class="text-xl font-light text-gray-300 max-w-2xl mx-auto">
          Novedades, reconocimientos y apariciones en medios.
        </p>
      </div>
      <!-- Background subtle -->
      <div class="absolute inset-0 bg-premium-stone opacity-20"></div>
    </section>

    <!-- Press Grid -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <article 
            v-for="noticia in noticias" 
            :key="noticia.id"
            class="group bg-white border-b border-gray-200 pb-12 last:border-0"
          >
            <!-- Media (Image or Video) -->
            <div class="aspect-video w-full overflow-hidden bg-gray-100 relative mb-8">
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
                <img 
                  :src="noticia.mediaUrl" 
                  :alt="noticia.titulo"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </template>
            </div>

            <!-- Content -->
            <div class="flex flex-col">
              <div class="text-sm text-gray-500 uppercase tracking-widest mb-3">
                {{ noticia.fecha }} • {{ noticia.categoria }}
              </div>

              <h3 class="text-3xl font-serif font-medium mb-4 group-hover:text-premium-gold transition-colors">
                {{ noticia.titulo }}
              </h3>

              <p class="text-gray-600 font-light leading-relaxed mb-6">
                {{ noticia.extracto }}
              </p>

              <a 
                :href="noticia.link || noticia.mediaUrl" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block text-sm uppercase tracking-widest border-b border-black pb-1 self-start hover:text-premium-gold hover:border-premium-gold transition-colors"
              >
                Ver Contenido
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { noticias } = usePrensa()

// SEO
useHead({
  title: 'Prensa - Beltran Brione',
  meta: [
    { name: 'description', content: 'Noticias, entrevistas y comunicados de prensa de Beltran Brione.' }
  ]
})
</script>
