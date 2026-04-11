<script setup lang="ts">
import { works } from '~/data/works'

const featuredWorks = works.slice(0, 3)
</script>

<template>
  <div>
    <section class="section-wrap">
      <UContainer class="py-16 md:py-24">
        <div class="grid lg:grid-cols-12 gap-8 items-end">
          <div class="lg:col-span-8">
            <p class="font-mono text-xs tracking-widest text-primary-400 mb-4">
              DIGITAL ARTIST / LIVE VISUALS / SOUND
            </p>
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] uppercase">
              Tech brutalism for
              <span class="text-primary-400">human emotion</span>
            </h1>
            <p class="mt-6 text-lg text-zinc-300 max-w-2xl">
              Creo piezas audiovisuales y experimentos visuales donde el error, el ritmo y la materia digital se convierten en lenguaje.
            </p>
          </div>

          <div class="lg:col-span-4 lg:justify-self-end w-full lg:max-w-sm">
            <div class="brutal-card bg-[var(--bg-1)] p-5">
              <p class="font-mono text-xs text-zinc-400 mb-3">
                STATUS
              </p>
              <p class="text-xl font-semibold">
                Abierto a colaboraciones y residencias 2026
              </p>
              <div class="mt-4 flex gap-3">
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
          <article
            v-for="work in featuredWorks"
            :key="work.slug"
            class="brutal-card bg-[var(--bg-1)] overflow-hidden"
          >
            <img
              :src="work.image"
              :alt="work.title"
              class="h-56 w-full object-cover"
              loading="lazy"
            >
            <div class="p-5 space-y-3">
              <p class="font-mono text-xs text-zinc-400">
                {{ work.year }} - {{ work.medium }}
              </p>
              <h3 class="text-xl font-semibold">
                {{ work.title }}
              </h3>
              <p class="text-zinc-300">
                {{ work.summary }}
              </p>
            </div>
          </article>
        </div>
      </UContainer>
    </section>
  </div>
</template>
