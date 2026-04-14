<script setup lang="ts">
import { site } from '~/data/site'
import { works } from '~/data/works'

const featuredWorks = works.slice(0, 3)
</script>

<template>
  <div>
    <section class="relative min-h-[64vh] overflow-hidden bg-[var(--bg-2)] md:min-h-[76vh]">
      <img
        src="/hero_1.jpg"
        alt="Hero Franco Pozo"
        class="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchpriority="high"
      >

      <div class="absolute inset-0 bg-gradient-to-t from-[rgba(6,7,8,0.88)] via-[rgba(6,7,8,0.52)] to-[rgba(6,7,8,0.14)]" />

      <div class="relative z-10 flex min-h-[64vh] items-end md:min-h-[76vh]">
        <UContainer class="w-full pb-8 md:pb-12 lg:pb-14">
          <p class="mb-4 font-mono text-xs tracking-[0.18em] text-primary-400">
            GRAPHIC & MOTION DESIGNER / VISUAL ARTIST
          </p>

          <h1 class="max-w-4xl text-4xl font-bold uppercase leading-[0.95] md:text-6xl lg:text-7xl">
            {{ site.headline }}
          </h1>

          <p class="mt-5 max-w-2xl text-base text-[var(--text-1)] md:text-lg">
            Puedo crear tu siguiente experiencia visuals.
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <UButton
              to="/portfolio"
              label="Ver obras"
              trailing-icon="i-lucide-arrow-right"
            />
            <UButton
              to="/contact"
              label="Contacto"
              color="neutral"
              variant="outline"
            />
          </div>
        </UContainer>
      </div>
    </section>

    <section class="section-wrap">
      <UContainer class="py-8 md:py-10">
        <div class="brutal-card bg-[var(--bg-1)] p-5 md:p-6">
          <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="mb-2 font-mono text-xs text-[var(--text-3)]">
                STATUS
              </p>
              <p class="text-lg font-semibold md:text-xl">
                Abierto a colaboraciones y residencias 2026
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-2)]">
              <span>{{ site.location }}</span>
              <span class="text-[var(--line-strong)]">//</span>
              <span>Diseno</span>
              <span class="text-[var(--line-strong)]">//</span>
              <span>Animacion</span>
              <span class="text-[var(--line-strong)]">//</span>
              <span>Live Visuals</span>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="section-wrap">
      <UContainer class="py-14 md:py-16">
        <div class="flex items-center justify-between gap-4 mb-8">
          <h2 class="text-2xl md:text-3xl font-bold uppercase">
            Obras destacadas
          </h2>
          <UButton
            to="/portfolio"
            label="Portfolio completo"
            color="neutral"
            variant="ghost"
            trailing-icon="i-lucide-arrow-right"
          />
        </div>

        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <NuxtLink
            v-for="work in featuredWorks"
            :key="work.slug"
            :to="`/portfolio/${work.slug}`"
            class="brutal-card bg-[var(--bg-1)] overflow-hidden transition-transform hover:-translate-y-1"
          >
            <img
              :src="work.image"
              :alt="work.title"
              class="h-56 w-full object-cover"
              loading="lazy"
            >
            <div class="p-5 space-y-3">
              <p class="font-mono text-xs text-[var(--text-3)]">
                {{ work.year }} - {{ work.medium }}
              </p>
              <h3 class="text-xl font-semibold">
                {{ work.title }}
              </h3>
              <p class="text-[var(--text-1)]">
                {{ work.summary }}
              </p>
              <p class="font-mono text-xs text-primary-400">
                Ver detalle ->
              </p>
            </div>
          </NuxtLink>
        </div>
      </UContainer>
    </section>
  </div>
</template>
