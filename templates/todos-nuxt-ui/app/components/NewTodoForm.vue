<script setup lang="ts">
import type { UInput } from '#components'

const newTodo = ref('')

type NewTodoInputType = InstanceType<typeof UInput>
const newTodoInput = useTemplateRef<NewTodoInputType>('new-todo')

const toast = useToast()
const queryCache = useQueryCache()

const { mutate: addTodo, isLoading: loading } = useMutation<Todo, string>({
  mutation: (title: string) => {
    if (!title.trim()) throw new Error('Title is required')

    return $fetch('/api/todos', {
      method: 'POST',
      body: {
        title,
        completed: 0
      }
    })
  },

  async onSuccess(todo: Todo) {
    await queryCache.invalidateQueries({ key: ['todos'] })
    toast.add({ title: `Todo "${todo.title}" created.` })
  },

  onSettled() {
    newTodo.value = ''
    // the first nextTick allows loading to become false and re enable the input
    // the second nextTick allows the input to be rendered again so it can be focused
    // a better solution would be to use a custom `v-focus` directive or a more elaborated focus management solution
    nextTick()
      .then(() => nextTick())
      .then(() => {
        newTodoInput.value?.inputRef?.focus()
      })
  },

  onError(err) {
    if (isNuxtZodError(err)) {
      const title = err.data?.data.issues
        .map(issue => issue.message)
        .join('\n')
      if (title) {
        toast.add({ title, color: 'error' })
      }
    }
    else {
      console.error(err)
      toast.add({ title: 'Unexpected Error', color: 'error' })
    }
  }
})
</script>

<template>
  <form
    class="flex flex-col gap-4"
    @submit.prevent="addTodo(newTodo)"
  >
    <div class="flex items-center gap-2">
      <UInput
        ref="new-todo"
        v-model="newTodo"
        name="todo"
        :disabled="loading"
        class="flex-1"
        placeholder="Make a Nuxt demo"
        autocomplete="off"
        autofocus
      />

      <UButton
        type="submit"
        icon="i-heroicons-plus-20-solid"
        :loading="loading"
        :disabled="newTodo.trim().length === 0"
      />
    </div>
  </form>
</template>
