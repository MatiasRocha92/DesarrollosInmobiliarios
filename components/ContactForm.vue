<template>
  <section id="contacto" class="py-24 md:py-32 bg-premium-cream">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h2 class="text-4xl md:text-6xl font-serif mb-8">Contacto</h2>
          <p class="text-gray-600 font-light text-lg mb-12 leading-relaxed">
            ¿Interesado en una de nuestros desarrollos inmobiliarios o tiene alguna pregunta?
            Complete el formulario a continuación y nuestro equipo se pondrá en contacto con usted a la brevedad.
          </p>
          
          <div class="space-y-8">
            <div>
              <h3 class="text-xs uppercase tracking-widest text-gray-500 mb-2">Oficina</h3>
              <p class="text-xl font-serif">Av. Alvear 1891, Buenos Aires, Argentina</p>
            </div>
            <div>
              <h3 class="text-xs uppercase tracking-widest text-gray-500 mb-2">Email</h3>
              <p class="text-xl font-serif">info@beltranbrione.com</p>
            </div>
            <div>
              <h3 class="text-xs uppercase tracking-widest text-gray-500 mb-2">Teléfono</h3>
              <p class="text-xl font-serif">+54 11 4804-0000</p>
            </div>
          </div>
        </div>

        <form @submit.prevent="submitForm" class="space-y-8">
          <div class="group">
            <label class="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-black transition-colors">Nombre</label>
            <input type="text" class="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black transition-colors" placeholder="Juan Pérez" />
          </div>
          
          <div class="group">
            <label class="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-black transition-colors">Email</label>
            <input type="email" class="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black transition-colors" placeholder="juan@ejemplo.com" />
          </div>

          <div class="group">
            <label class="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-black transition-colors">Mensaje</label>
            <textarea rows="4" class="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black transition-colors resize-none" placeholder="Estoy interesado en..."></textarea>
          </div>

          <button type="submit" class="px-10 py-4 bg-black text-white uppercase tracking-widest text-sm hover:bg-premium-gold transition-colors duration-300">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const submitForm = () => {
  // Handle form submission
  alert('Gracias por su interés. Nos pondremos en contacto pronto.')
}
</script>
