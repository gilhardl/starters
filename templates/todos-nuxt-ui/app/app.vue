<script setup lang="ts">
const { loggedIn } = useUserSession()

watch(loggedIn, () => {
  if (!loggedIn.value) {
    navigateTo('/')
  }
})
</script>

<template>
  <UApp>
    <UContainer class="min-h-screen flex flex-col justify-center">
      <div class="mb-2 text-right">
        <ColorModeSwitch />
      </div>

      <UCard>
        <template #header>
          <ULink to="/">
            <h1>
              Todos
            </h1>
          </ULink>

          <UButton
            v-if="!loggedIn"
            to="/api/auth/github"
            icon="i-simple-icons-github"
            label="Login with GitHub"
            color="neutral"
            size="xs"
            external
          />
          <div
            v-else
            class="flex flex-wrap -mx-2 sm:mx-0"
          >
            <UButton
              to="/todos"
              icon="i-heroicons-list-bullet"
              label="Todos"
              :color="$route.path === '/todos' ? 'primary' : 'neutral'"
              variant="ghost"
            />
            <UserDropdownMenu />
          </div>
        </template>

        <NuxtPage />
      </UCard>

      <footer class="text-center mt-2">
        <ULink
          href="https://github.com/gilhardl/todos"
          target="_blank"
          class="text-sm text-gray-500 hover:text-gray-700"
        >
          GitHub
        </ULink>
      </footer>
    </UContainer>

    <NuxtRouteAnnouncer />
  </UApp>
</template>
