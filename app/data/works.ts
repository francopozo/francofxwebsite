export type Work = {
  slug: string
  title: string
  year: string
  medium: string
  summary: string
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
    tags: ['glitch', 'audio-reactive', 'installation'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'concrete-pulse',
    title: 'Concrete Pulse',
    year: '2025',
    medium: 'Digital print series',
    summary: 'Serie de impresiones digitales que combina estructuras de concreto y pulsos de datos.',
    tags: ['print', 'brutalism', 'generative'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'human-machine-prayer',
    title: 'Human Machine Prayer',
    year: '2024',
    medium: 'Live performance',
    summary: 'Performance en vivo entre sintetizadores, voz procesada y proyeccion de codigo.',
    tags: ['performance', 'sound-design', 'live'],
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80'
  }
]
