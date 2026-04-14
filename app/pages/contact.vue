<script setup lang="ts">
import { site } from '~/data/site'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

function onSubmit() {
  submitted.value = true
}
</script>

<template>
  <section class="section-wrap">
    <UContainer class="py-14 md:py-20">
      <p class="font-mono text-xs tracking-widest text-primary-400 mb-3">
        CONTACT
      </p>
      <h1 class="mb-10 text-4xl font-bold uppercase md:text-5xl">
        Hablemos de tu proyecto
      </h1>

      <div class="grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-7 brutal-card bg-[var(--bg-1)] p-7 md:p-10">
          <form
            class="space-y-6"
            @submit.prevent="onSubmit"
          >
            <UFormField
              label="Nombre"
              required
            >
              <UInput
                v-model="form.name"
                placeholder="Tu nombre"
                size="xl"
              />
            </UFormField>

            <UFormField
              label="Email"
              required
            >
              <UInput
                v-model="form.email"
                type="email"
                placeholder="tu@email.com"
                size="xl"
              />
            </UFormField>

            <UFormField
              label="Mensaje"
              required
            >
              <UTextarea
                v-model="form.message"
                :rows="6"
                placeholder="Cuentame sobre tu proyecto"
              />
            </UFormField>

            <div class="mt-1 flex items-center gap-4">
              <UButton
                type="submit"
                label="Enviar mensaje"
                trailing-icon="i-lucide-send"
              />
              <p
                v-if="submitted"
                class="text-sm text-primary-400"
              >
                Formulario de muestra listo para conectar a email/API.
              </p>
            </div>
          </form>
        </div>

        <aside class="lg:col-span-5 brutal-card bg-[var(--bg-1)] p-7 md:p-10 space-y-5">
          <p class="font-mono text-xs text-[var(--text-3)]">
            DIRECT
          </p>
          <p class="text-[var(--text-1)]">
            Puedes escribirme para colaboraciones, propuestas comerciales o proyectos artisticos.
          </p>
          <ul class="space-y-3 text-[var(--text-1)] text-sm">
            <li>Email: {{ site.contactEmail }}</li>
            <li
              v-for="social in site.socials"
              :key="social.href"
            >
              <a
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[var(--line-strong)] underline-offset-2 hover:text-primary-300"
              >
                {{ social.label }}
              </a>
            </li>
          </ul>
          <UButton
            :to="`mailto:${site.contactEmail}`"
            label="Abrir email"
            color="neutral"
            variant="outline"
            icon="i-lucide-mail"
          />
        </aside>
      </div>
    </UContainer>
  </section>
</template>
