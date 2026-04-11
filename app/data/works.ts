export type Work = {
  slug: string
  title: string
  year: string
  medium: string
  summary: string
  longDescription: string
  tags: string[]
  image: string
}

export const works: Work[] = [
  {
    slug: 'signal-noise-01',
    title: 'Signal / Noise 01',
    year: '2026',
    medium: 'Audiovisual installation',
    summary: 'Loop audiovisual construido con capas de ruido, glitch y tipografia modular.',
    longDescription: 'Instalacion de gran formato basada en capas de visuales sinteticos y textura sonora granular. La pieza explora la fatiga digital y la sobrecarga de informacion a traves de ciclos de ruido y silencio.',
    tags: ['glitch', 'audio-reactive', 'installation'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'concrete-pulse',
    title: 'Concrete Pulse',
    year: '2025',
    medium: 'Digital print series',
    summary: 'Serie de impresiones digitales que combina estructuras de concreto y pulsos de datos.',
    longDescription: 'Conjunto de impresiones con composicion modular, tipografia fragmentada y patrones generativos inspirados en arquitectura brutalista. Cada pieza traduce datos cotidianos en materia visual fisica.',
    tags: ['print', 'brutalism', 'generative'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'human-machine-prayer',
    title: 'Human Machine Prayer',
    year: '2024',
    medium: 'Live performance',
    summary: 'Performance en vivo entre sintetizadores, voz procesada y proyeccion de codigo.',
    longDescription: 'Performance audiovisual en tiempo real que mezcla sintetizadores modulares, voz procesada y visuales generativos. El set evoluciona por escenas y responde al pulso de la audiencia.',
    tags: ['performance', 'sound-design', 'live'],
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80'
  }
]
