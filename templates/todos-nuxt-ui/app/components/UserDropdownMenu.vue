<script lang="ts" setup>
import type { DropdownMenuItem } from '@nuxt/ui'

const { user, clear } = useUserSession()

const userDropdownItems: DropdownMenuItem[] = [
  {
    label: 'Logout',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    onSelect: clear
  }
]
</script>

<template>
  <UDropdownMenu
    v-if="user"
    :items="userDropdownItems"
  >
    <UButton
      color="neutral"
      variant="ghost"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    >
      <UAvatar
        :src="`https://github.com/${user.login}.png`"
        :alt="user.login"
        size="3xs"
      />
      {{ user.login }}
    </UButton>
  </UDropdownMenu>
</template>
