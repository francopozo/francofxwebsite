<script setup lang="ts">
import { works } from '~/data/works'

const route = useRoute()

const work = computed(() => works.find(item => item.slug === route.params.slug))

if (!work.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Work not found'
  })
}

useSeoMeta({
  title: `${work.value.title} | Portfolio`,
  description: work.value.summary,
  ogTitle: `${work.value.title} | Portfolio`,
  ogDescription: work.value.summary,
  ogImage: work.value.image
})
</script>

<template>
  <section class="section-wrap">
    <UContainer class="py-12 md:py-16">
      <UButton
        to="/portfolio"
        label="Volver a portfolio"
        color="neutral"
        variant="ghost"
        icon="i-lucide-arrow-left"
        class="mb-8"
      />

      <div class="grid lg:grid-cols-12 gap-8">
        <div class="lg:col-span-8 space-y-6">
          <img
            :src="work?.image"
            :alt="work?.title"
            class="brutal-card h-[380px] md:h-[520px] w-full object-cover"
          >

          <div class="brutal-card bg-[var(--bg-1)] p-6 md:p-8">
            <p class="font-mono text-xs tracking-widest text-primary-400 mb-3">
              {{ work?.year }} / {{ work?.medium }}
            </p>
            <h1 class="text-3xl md:text-5xl font-bold uppercase mb-5">
              {{ work?.title }}
            </h1>
            <p class="text-[var(--text-1)] leading-relaxed text-lg">
              {{ work?.longDescription }}
            </p>
          </div>
        </div>

        <aside class="lg:col-span-4 brutal-card bg-[var(--bg-1)] p-6 space-y-4 h-fit">
          <p class="font-mono text-xs text-[var(--text-3)]">
            TAGS
          </p>

          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="tag in work?.tags"
              :key="tag"
              color="primary"
              variant="soft"
            >
              #{{ tag }}
            </UBadge>
          </div>

          <USeparator />

          <p class="text-sm text-[var(--text-1)]">
            Si quieres esta pieza en una muestra, colaboracion o version expandida, escribeme desde la seccion de contacto.
          </p>
          <UButton
            to="/contact"
            label="Solicitar colaboracion"
            trailing-icon="i-lucide-arrow-right"
          />
        </aside>
      </div>
    </UContainer>
  </section>
</template>
