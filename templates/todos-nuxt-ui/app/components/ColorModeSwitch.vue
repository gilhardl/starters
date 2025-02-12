<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'system'
    ? colorMode.value === 'dark'
      ? 'light'
      : 'dark'
    : colorMode.preference === 'dark'
      ? 'light'
      : 'dark'
}
</script>

<template>
  <UButton
    square
    variant="ghost"
    color="neutral"
    :icon="$colorMode.preference === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'"
    @click="toggleColorMode"
  />
</template>
