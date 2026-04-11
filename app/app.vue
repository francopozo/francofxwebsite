<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})

const title = 'Franco Pozo | Artist Portfolio'
const description = 'Portfolio personal de artista con enfoque experimental tech brutalista.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  twitterCard: 'summary_large_image'
})

const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Sobre mi', to: '/about' },
  { label: 'Contacto', to: '/contact' }
]
</script>

<template>
  <UApp>
    <div class="min-h-dvh tech-grid">
      <header class="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(9,9,9,0.92)] backdrop-blur">
        <UContainer class="flex items-center justify-between gap-4 py-4">
          <NuxtLink
            to="/"
            class="font-mono text-sm md:text-base tracking-wider uppercase"
          >
            FRANCO//LAB
          </NuxtLink>

          <nav class="flex items-center gap-1 md:gap-2">
            <UButton
              v-for="item in nav"
              :key="item.to"
              :to="item.to"
              :label="item.label"
              color="neutral"
              variant="ghost"
              size="sm"
              class="font-mono"
            />
          </nav>
        </UContainer>
      </header>

      <UMain>
        <NuxtPage />
      </UMain>

      <footer class="section-wrap mt-16">
        <UContainer class="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p class="text-sm text-muted font-mono">
            EXPERIMENTAL ART PORTFOLIO // {{ new Date().getFullYear() }}
          </p>
          <p class="text-xs text-muted">
            Built with Nuxt UI. Ready for static deploy on Banahosting.
          </p>
        </UContainer>
      </footer>
    </div>
  </UApp>
</template>
