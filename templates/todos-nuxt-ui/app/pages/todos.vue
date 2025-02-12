<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div>
    <NewTodoForm />
    <TodosList />
  </div>
</template>
