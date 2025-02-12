import { sql } from 'drizzle-orm'

export default eventHandler(async () => {
  return await useDB().select({
    todos: sql<number>`count(*)`,
    users: sql<number>`count(distinct(${tables.todos.userId}))`
  }).from(tables.todos).get()
})
