<script setup lang="ts">
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
    <UContainer class="py-12 md:py-16">
      <p class="font-mono text-xs tracking-widest text-primary-400 mb-3">
        CONTACT
      </p>
      <h1 class="text-4xl md:text-5xl font-bold uppercase mb-8">
        Let's build something intense
      </h1>

      <div class="grid lg:grid-cols-12 gap-8">
        <div class="lg:col-span-7 brutal-card bg-[var(--bg-1)] p-6 md:p-8">
          <form
            class="space-y-5"
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

            <div class="flex items-center gap-3">
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

        <aside class="lg:col-span-5 brutal-card bg-[var(--bg-1)] p-6 md:p-8 space-y-4">
          <p class="font-mono text-xs text-zinc-400">
            DIRECT
          </p>
          <p class="text-zinc-300">
            Puedes escribirme para comisiones, colaboraciones o exhibiciones.
          </p>
          <ul class="space-y-2 text-zinc-200">
            <li>Email: contacto@francopozo.art</li>
            <li>Instagram: @francopozo.art</li>
            <li>GitHub: github.com/francopozo</li>
          </ul>
        </aside>
      </div>
    </UContainer>
  </section>
</template>
