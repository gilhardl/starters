import type { SupabaseClient } from '@supabase/supabase-js'
import { createContext } from 'unctx'
import type { H3Event } from 'h3'
import { serverSupabaseClient, serverSupabaseServiceRole } from '#supabase/server'

export type SupabaseContext = { client: SupabaseClient<Database> | null, serviceRoleClient: SupabaseClient<Database> | null }

const ctx = createContext<SupabaseContext>()
ctx.set({ client: null, serviceRoleClient: null })

const useSupabase = ctx.use

export async function useSupabaseClient(event?: H3Event): Promise<SupabaseClient<Database>> {
  const supabase = useSupabase()
  if (event) supabase.client = await serverSupabaseClient<Database>(event)
  else if (!supabase.client) throw createError({
    statusCode: 500,
    statusMessage: 'Supabase client not initialized'
  })
  return supabase.client
}

export function useSupabaseServiceRoleClient(event?: H3Event): SupabaseClient<Database> {
  const supabase = useSupabase()
  if (event) supabase.serviceRoleClient = serverSupabaseServiceRole<Database>(event)
  else if (!supabase.serviceRoleClient) throw createError({
    statusCode: 500,
    statusMessage: 'Supabase service role client not intialized'
  })
  return supabase.serviceRoleClient
}
