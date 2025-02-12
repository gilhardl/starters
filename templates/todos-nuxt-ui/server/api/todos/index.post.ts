import { useValidatedBody, z } from 'h3-zod'

export default eventHandler(async (event) => {
  const { title } = await useValidatedBody(event, {
    title: z.string().min(1).max(100)
  })
  const { user } = await requireUserSession(event)

  const todo = await useDB().insert(tables.todos).values({
    userId: user.id,
    title
  }).returning().get()

  return todo
})
