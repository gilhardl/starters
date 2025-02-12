<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const navigationItems = computed(() => [{
  label: 'Features',
  to: '#features',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Pricing',
  to: '#pricing',
  active: activeHeadings.value.includes('pricing') && !activeHeadings.value.includes('testimonials')
}, {
  label: 'Testimonials',
  to: '#testimonials',
  active: activeHeadings.value.includes('testimonials')
}, {
  label: 'FAQ',
  to: '#faq',
  active: activeHeadings.value.includes('faq')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features')!,
    document.querySelector('#pricing')!,
    document.querySelector('#testimonials')!,
    document.querySelector('#faq')!
  ])
})
</script>

<template>
  <UHeader>
    <template #left>
      <div class="flex row items-center gap-2">
        <NuxtLink
          to="/"
          class="flex row items-center gap-2 text-xl font-bold"
        >
          <img
            src="/icon.svg"
            class="h-6"
          >
          Landing Pro
        </NuxtLink>
        <UBadge
          label="Nuxt UI Pro"
          variant="subtle"
          class="mb-0.5"
        />
      </div>
    </template>

    <UNavigationMenu
      :items="navigationItems"
      variant="link"
      highlight
    />

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://github.com/nuxt-ui-pro/landing/tree/v3"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>

    <template #content>
      <UNavigationMenu
        :items="navigationItems"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
