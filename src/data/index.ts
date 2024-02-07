// const { drizzle } = import.meta.env.DEV
//   ? require('drizzle-orm/bun-sqlite')
//   : require('drizzle-orm/libsql')
//   import { Database } from 'bun:sqlite'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client/web'

// const development = process.env.DEV
// const url = development
//   ? process.env.DB_URL_DEV || 'local.db'
//   : process.env.TURSO_DB_URL || ''
//   const sqlite = new Database(process.env.DB_URL_DEV || 'local.db')

const client = createClient({
  url: process.env.TURSO_DB_URL || '',
  authToken: process.env.TURSO_DB_AUTH_TOKEN,
})

export const db = drizzle(client)
