export const usePrensa = () => {
  const noticias = [
    {
      id: 1,
      titulo: 'PYME VS CORPO: Charla con Pato Jebsen',
      fecha: '28 Noviembre 2025',
      categoria: 'Podcast',
      extracto: 'Una conversación sobre las diferencias entre trabajar en una pyme y una corporación, destacando la velocidad, los desafíos generacionales y la importancia de las habilidades blandas en el éxito profesional.',
      tipoMedia: 'video',
      mediaUrl: 'https://www.youtube.com/embed/iFsOlMWjG1c?si=4NmwImnsaowVljVu',
      link: 'https://www.youtube.com/embed/iFsOlMWjG1c?si=4NmwImnsaowVljVu' // Ejemplo de link externo o al mismo video
    },
    {
      id: 2,
      titulo: 'Beltran Brione inaugura nuevo desarrollo',
      fecha: '25 Noviembre 2025',
      categoria: 'Lanzamiento',
      extracto: 'La desarrolladora presenta su proyecto más ambicioso: un complejo de torres residenciales con amenities de clase mundial.',
      tipoMedia: 'imagen',
      mediaUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
      link: '' // Si está vacío, usará mediaUrl
    },
    {
      id: 3,
      titulo: 'Beltrán Briones: del mundo de la construcción al éxito ...',
      fecha: '10 Noviembre 2025',
      categoria: 'Entrevista',
      extracto: 'cómo creó su marca sin miedo a los haters y logró vender departamentos con contenido contable.',
      tipoMedia: 'imagen',
      mediaUrl: 'https://www.infobae.com/resizer/v2/4V6BVORPYNDNFAMJQ3UTSPYVOQ.jpg?auth=292045ebf70ff5978a5ab04c1a2f63820106d71f87edf462bc809df867c097b0&smart=true&width=1200&height=674&quality=85',
      link: 'https://www.infobae.com/reportajes/2025/05/03/beltran-briones-del-mundo-de-la-construccion-al-exito-viral-como-creo-su-marca-sin-miedo-a-los-haters-y-logro-vender-departamentos-con-contenido-contable/'
    },
    {
      id: 4,
      titulo: 'Expansión a nuevos mercados inmobiliarios',
      fecha: '1 Noviembre 2025',
      categoria: 'Expansión',
      extracto: 'La compañía anuncia su ingreso al mercado de oficinas corporativas con proyectos que redefinen el concepto de espacio de trabajo.',
      tipoMedia: 'imagen',
      mediaUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
      link: ''
    }
  ]

  return {
    noticias
  }
}
