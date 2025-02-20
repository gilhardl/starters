import { eq } from 'drizzle-orm'

export default eventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const todos = await useDB().select().from(tables.todos).where(eq(tables.todos.userId, user.id)).all()

  return todos as Todo[]
})
