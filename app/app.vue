<script setup>
import { site } from '~/data/site'

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

const title = `${site.artistName} | Diseno y visuales`
const description = 'Diseno, motion graphics y exploracion visual entre lo comercial y lo artistico.'

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

const route = useRoute()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu()
  }
)
</script>

<template>
  <UApp>
    <div class="min-h-dvh">
      <header class="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--surface-overlay)] backdrop-blur">
        <UContainer class="flex items-center justify-between gap-4 py-4 md:py-5">
          <NuxtLink
            to="/"
            class="inline-flex shrink-0 items-center"
          >
            <img
              src="/francofx_logowhite.svg"
              alt="FrancoFX"
              class="h-9 w-auto md:h-11"
            >
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-1 md:gap-2">
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

          <UButton
            class="md:hidden"
            color="neutral"
            variant="ghost"
            size="sm"
            :icon="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            aria-label="Abrir menu principal"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-nav"
            @click="toggleMobileMenu"
          />
        </UContainer>

        <div
          v-if="isMobileMenuOpen"
          id="mobile-nav"
          class="absolute left-0 right-0 top-full z-50 border-y border-[var(--line)] bg-[var(--surface-overlay-strong)] backdrop-blur md:hidden"
        >
          <UContainer class="py-4">
            <nav class="flex flex-col gap-1">
              <UButton
                v-for="item in nav"
                :key="`mobile-${item.to}`"
                :to="item.to"
                :label="item.label"
                color="neutral"
                variant="ghost"
                size="sm"
                class="w-full justify-start font-mono"
                @click="closeMobileMenu"
              />
            </nav>
          </UContainer>
        </div>
      </header>

      <UMain>
        <NuxtPage />
      </UMain>

      <footer class="section-wrap mt-20 md:mt-24">
        <UContainer class="py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="inline-flex items-center gap-3">
            <img
              src="/francofx_logowhite.svg"
              alt="FrancoFX"
              class="h-7 w-auto"
            >
            <div class="leading-tight">
              <p class="font-mono text-[10px] tracking-[0.18em] text-[var(--text-3)]">
                ARTIST PORTFOLIO
              </p>
              <p class="text-sm font-semibold text-[var(--text-1)]">
                Franco Pozo // {{ new Date().getFullYear() }}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-4 text-xs">
            <UButton
              v-for="social in site.socials"
              :key="social.href"
              :to="social.href"
              :label="social.label"
              target="_blank"
              color="neutral"
              variant="link"
              class="font-mono"
            />
          </div>
        </UContainer>
      </footer>
    </div>
  </UApp>
</template>
