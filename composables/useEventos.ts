export const useEventos = () => {
  const eventos = [
    {
      id: 1,
      titulo: 'Conferencia de Marketing y Posicionamiento',
      fecha: '15 Noviembre 2025',
      hora: '19:00 HS',
      lugar: 'Hotel Alvear, San Juan',
      mapsLink: 'https://maps.app.goo.gl/GymLEzUZZJjWcRqW8',
      descripcion: 'Presentación oficial de nuestro nuevo proyecto de oficinas premium en el centro financiero. Cocktail de bienvenida y presentación de maquetas.',
      tipoMedia: 'video',
      mediaUrl: 'https://www.youtube.com/embed/edWVpCvtF6c?si=hREZhn9wmkqT3Bsc'
    },
    {
      id: 2,
      titulo: 'Open House Residencial',
      fecha: '20 Noviembre 2025',
      hora: '10:00 - 18:00 HS',
      lugar: 'Showroom Beltran Brione',
      mapsLink: 'https://goo.gl/maps/example',
      descripcion: 'Visita guiada a nuestro complejo residencial de lujo. Recorridos personalizados por las unidades modelo y amenities.',
      tipoMedia: 'imagen',
      mediaUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop'
    },
    {
      id: 3,
      titulo: 'Conferencia de Inversión',
      fecha: '10 Enero 2025',
      hora: '18:30 HS',
      lugar: 'Auditorio Principal',
      mapsLink: 'https://goo.gl/maps/example',
      descripcion: 'Charla exclusiva sobre oportunidades de inversión en desarrollos inmobiliarios de alto rendimiento y proyecciones de mercado 2025.',
      tipoMedia: 'imagen',
      mediaUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop'
    }
  ]

  return {
    eventos
  }
}
