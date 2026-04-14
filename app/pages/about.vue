<script setup lang="ts">
import { site } from '~/data/site'

const focusItems = [
  'Diseno con intencion y claridad',
  'Busqueda de identidad visual propia',
  'Integracion de arte y comunicacion',
  'Exploracion de nuevas herramientas y medios'
]

const services = [
  'Diseno grafico',
  'Motion graphics',
  'Edicion y produccion de video',
  'Diseno para redes sociales',
  'Desarrollo de identidad visual',
  'Contenido digital estrategico'
]
</script>

<template>
  <section class="section-wrap">
    <UContainer class="py-14 md:py-20">
      <p class="font-mono text-xs tracking-widest text-primary-400 mb-3">
        ABOUT
      </p>
      <h1 class="mb-10 text-4xl font-bold uppercase md:text-5xl">
        Perfil
      </h1>

      <div class="grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-8 brutal-card bg-[var(--bg-1)] p-7 md:p-10 space-y-5 text-[var(--text-1)] text-lg leading-relaxed">
          <p>
            Soy {{ site.artistName }}, disenador grafico y creador de contenido enfocado en comunicacion visual, motion graphics y produccion digital.
            Mi trabajo se situa entre el diseno y la exploracion artistica, combinando estructura, narrativa visual y experimentacion.
          </p>
          <p>
            Tengo formacion en Ingenieria Comercial y especializacion en gestion de contenido y comunidades, lo que me permite entender tanto
            la parte creativa como los objetivos estrategicos detras de cada proyecto.
          </p>
          <p>
            Ademas de mi trabajo comercial, desarrollo propuestas visuales mas experimentales, explorando nuevas formas de expresion a traves
            del movimiento, la imagen y el sonido.
          </p>
        </div>

        <aside class="lg:col-span-4 brutal-card bg-[var(--bg-1)] p-7 md:p-8 space-y-4">
          <p class="font-mono text-xs text-[var(--text-3)]">
            ENFOQUE
          </p>
          <ul class="space-y-3 text-[var(--text-1)]">
            <li
              v-for="item in focusItems"
              :key="item"
            >
              - {{ item }}
            </li>
          </ul>
          <p class="pt-2 text-[var(--text-2)]">
            Trabajo tanto desde lo funcional como desde lo expresivo.
          </p>
        </aside>
      </div>

      <div class="mt-10 grid gap-10 lg:grid-cols-2">
        <section class="brutal-card bg-[var(--bg-1)] p-7 md:p-9 space-y-5">
          <p class="font-mono text-xs text-[var(--text-3)]">
            SERVICIOS
          </p>
          <ul class="grid gap-3 text-[var(--text-1)] sm:grid-cols-2">
            <li
              v-for="service in services"
              :key="service"
            >
              - {{ service }}
            </li>
          </ul>
        </section>

        <section class="brutal-card bg-[var(--bg-1)] p-7 md:p-9 space-y-5 text-[var(--text-1)]">
          <p class="font-mono text-xs text-[var(--text-3)]">
            EXPERIENCIA
          </p>
          <p>
            He desarrollado mi experiencia principalmente trabajando con una empresa, creando soluciones visuales consistentes y aplicadas al
            mundo real. Esto me ha permitido construir criterio, disciplina y enfoque estrategico.
          </p>
          <p>
            Tambien formo parte de un colectivo de animacion 2D en Bolivia, donde colaboro en proyectos creativos.
          </p>
          <p>
            En paralelo, trabajo propuestas de live visuals, explorando la relacion entre imagen, sonido y tiempo real.
          </p>
        </section>
      </div>

      <div class="mt-10 grid gap-10 lg:grid-cols-12">
        <section class="lg:col-span-8 brutal-card bg-[var(--bg-1)] p-7 md:p-9 space-y-5 text-[var(--text-1)]">
          <p class="font-mono text-xs text-[var(--text-3)]">
            DIRECCION ARTISTICA
          </p>
          <p>
            Mi interes por el arte se centra en la exploracion visual y la experimentacion. Trabajo con piezas que buscan ir mas alla de lo
            funcional, explorando visuales generativos, composicion abstracta, ritmo visual sincronizado con audio y estetica digital experimental.
          </p>
          <p>
            Estos proyectos expanden mi lenguaje visual y aportan una mirada diferente a mi trabajo comercial.
          </p>
        </section>

        <aside class="lg:col-span-4 brutal-card bg-[var(--bg-1)] p-7 md:p-8 space-y-4 text-[var(--text-1)]">
          <p class="font-mono text-xs text-[var(--text-3)]">
            ACTUALIDAD
          </p>
          <p>
            Estoy evolucionando hacia un enfoque mas creativo y experimental, combinando diseno, animacion y live visuals.
          </p>
          <p class="text-[var(--text-2)]">
            Busco proyectos que integren arte, tecnologia y narrativa visual.
          </p>
          <p>
            <strong>Base:</strong> {{ site.location }}
          </p>
        </aside>
      </div>
    </UContainer>
  </section>
</template>
