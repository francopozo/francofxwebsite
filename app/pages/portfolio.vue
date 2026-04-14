<script setup lang="ts">
import { works } from '~/data/works'
</script>

<template>
  <section class="section-wrap">
    <UContainer class="py-16 md:py-24">
      <div class="mb-14">
        <p class="font-mono text-xs tracking-widest text-primary-400 mb-3">
          PORTFOLIO
        </p>
        <h1 class="text-4xl md:text-5xl font-bold uppercase">
          Selected Works
        </h1>
      </div>

      <div class="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        <NuxtLink
          v-for="work in works"
          :key="work.slug"
          :to="`/portfolio/${work.slug}`"
          class="brutal-card bg-[var(--bg-1)] overflow-hidden"
        >
          <img
            :src="work.image"
            :alt="work.title"
            class="h-52 w-full object-cover"
            loading="lazy"
          >
          <div class="space-y-5 p-7">
            <div class="flex items-center justify-between gap-3">
              <h2 class="text-xl font-semibold">
                {{ work.title }}
              </h2>
              <UBadge
                color="neutral"
                variant="outline"
              >
                {{ work.year }}
              </UBadge>
            </div>
            <p class="text-sm text-[var(--text-3)]">
              {{ work.medium }}
            </p>
            <p class="text-[var(--text-1)]">
              {{ work.summary }}
            </p>
            <div class="flex flex-wrap gap-4">
              <UBadge
                v-for="tag in work.tags"
                :key="tag"
                color="primary"
                variant="soft"
              >
                #{{ tag }}
              </UBadge>
            </div>
            <p class="font-mono text-xs text-primary-400">
              Ver detalle ->
            </p>
          </div>
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>
