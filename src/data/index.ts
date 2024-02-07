// const { drizzle } = import.meta.env.DEV
//   ? require('drizzle-orm/better-sqlite3')
//   : require('drizzle-orm/libsql')
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client/web'

// const development = process.env.DEV
// const url = development
//   ? process.env.DB_URL_DEV || 'local.db'
//   : process.env.TURSO_DB_URL || ''

const client = createClient({
  url: process.env.TURSO_DB_URL || '',
  authToken: process.env.TURSO_DB_AUTH_TOKEN,
})

export const db = drizzle(client)
