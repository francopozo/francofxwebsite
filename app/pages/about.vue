<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="section-wrap">
    <UContainer class="py-12 md:py-16">
      <p class="font-mono text-xs tracking-widest text-primary-400 mb-3">
        ABOUT
      </p>
      <h1 class="text-4xl md:text-5xl font-bold uppercase mb-8">
        Artist Statement
      </h1>

      <div class="grid lg:grid-cols-12 gap-8">
        <div class="lg:col-span-8 brutal-card bg-[var(--bg-1)] p-6 md:p-8 space-y-4 text-zinc-300 text-lg leading-relaxed">
          <p>
            Soy {{ site.artistName }}, artista enfocado en cruces entre imagen, sonido y codigo. Mi trabajo explora la tension entre sistemas
            tecnologicos y sensibilidad humana.
          </p>
          <p>
            Trabajo con procesos generativos, grabaciones de campo, y visuales de alto contraste para construir experiencias inmersivas.
            La estetica tech brutalista es mi punto de partida para hablar de ciudad, memoria y ruido digital.
          </p>
          <p>
            Actualmente desarrollo piezas para exhibicion, instalaciones y performance en vivo.
          </p>
        </div>

        <aside class="lg:col-span-4 brutal-card bg-[var(--bg-1)] p-6 space-y-3">
          <p class="font-mono text-xs text-zinc-400">
            INFO
          </p>
          <p><strong>Base:</strong> {{ site.location }}</p>
          <p><strong>Formatos:</strong> Instalacion, live AV, print digital</p>
          <p><strong>Intereses:</strong> Glitch, ruido, arquitectura digital</p>
        </aside>
      </div>
    </UContainer>
  </section>
</template>
