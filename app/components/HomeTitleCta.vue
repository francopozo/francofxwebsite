<template>
  <section class="section-wrap">
    <UContainer class="py-12 md:py-14">
      <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-8">
          <h2 class="text-2xl font-bold uppercase leading-[0.98] md:text-4xl lg:text-5xl">
            Puedo crear tu siguiente experiencia visual.
          </h2>
        </div>

        <div class="lg:col-span-4 lg:justify-self-end">
          <div class="flex flex-wrap gap-3 lg:justify-end">
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
    </UContainer>
  </section>
</template>
