<template>
  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'page',
      mode: 'out-in'
    }" />
  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        'name': 'Beltrán Briones',
        'image': 'https://images.unsplash.com/photo-1600596542815-2495db9a9cf6?q=80&w=2500&auto=format&fit=crop',
        '@id': 'https://beltranbriones.com',
        'url': 'https://beltranbriones.com',
        'telephone': '+54 11 4804-0000',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Av. Alvear 1891',
          'addressLocality': 'Buenos Aires',
          'postalCode': 'C1129',
          'addressCountry': 'AR'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': -34.5875,
          'longitude': -58.3885
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
          ],
          'opens': '09:00',
          'closes': '18:00'
        },
        'sameAs': [
          'https://www.facebook.com/beltranbriones',
          'https://www.instagram.com/beltranbriones',
          'https://www.linkedin.com/company/beltranbriones'
        ]
      })
    }
  ]
})
</script>
