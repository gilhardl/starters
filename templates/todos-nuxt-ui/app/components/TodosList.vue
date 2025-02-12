<script setup lang="ts">
const toast = useToast()
const queryCache = useQueryCache()

const { data: todos } = useQuery({
  key: ['todos'],
  // NOTE: the cast sometimes avoids an "Excessive depth check" TS error
  // using $fetch directly doesn't avoid the round trip to the server
  // when doing SSR
  // https://github.com/nuxt/nuxt/issues/24813
  query: () => useRequestFetch()('/api/todos') as Promise<Todo[]>
})

const { mutate: toggleTodo } = useMutation({
  mutation: (todo: Todo) =>
    $fetch(`/api/todos/${todo.id}`, {
      method: 'PATCH',
      body: {
        completed: Number(!todo.completed)
      }
    }),

  async onSuccess() {
    await queryCache.invalidateQueries({ key: ['todos'] })
  }
})

const { mutate: deleteTodo } = useMutation({
  mutation: (todo: Todo) =>
    $fetch(`/api/todos/${todo.id}`, { method: 'DELETE' }),

  async onSuccess(_result, todo) {
    await queryCache.invalidateQueries({ key: ['todos'] })
    toast.add({ title: `Todo "${todo.title}" deleted.` })
  }
})
</script>

<template>
  <ul class="divide-y divide-gray-200 dark:divide-gray-800">
    <li
      v-for="todo of todos"
      :key="todo.id"
      class="flex items-center gap-4 py-2"
    >
      <span
        class="flex-1 font-medium"
        :class="[todo.completed ? 'line-through text-gray-500' : '']"
      >{{ todo.title }}</span>

      <USwitch
        :model-value="Boolean(todo.completed)"
        @update:model-value="toggleTodo(todo)"
      />

      <UButton
        color="error"
        variant="soft"
        size="xs"
        icon="i-heroicons-x-mark-20-solid"
        @click="deleteTodo(todo)"
      />
    </li>
  </ul>
</template>
