<script setup lang="ts">
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
console.log(appConfig, runtimeConfig.icon)

const { title } = defineProps({
  title: { type: String, optional: true }
})

const parent = ref(null)
</script>

<template>
  <div
    ref="parent"
    class="parent"
    relative
    flex
    size-full
    overflow-hidden
    rounded-xl
    border
    bg-card
    text-card-foreground
    p-8
  >
    <div
      w-full
      relative
      z-1
      flex
      flex-col
      items-center
      gap-4
    >
      <h2
        v-if="title"
        text-2xl
        font-medium
      >
        {{ title }}
      </h2>

      <slot />
    </div>

    <div
      background
      pointer-events-none
      absolute
      inset-0
      rounded-xl
      opacity-0
      transition-opacity
      duration-300
      parent-hover:opacity-80
      bg-gradient-to-r
      from-background
      via-card
      to-background
    />
  </div>
</template>

<style scoped>
:slotted(code) {
  --at-apply: bg-gray-100 dark:bg-white/10 font-bold font-mono px-1 py-0.5 rounded;
}
</style>
