import type { Config } from 'drizzle-kit'

export default {
  schema: './src/data/schema.ts',
  out: './src/data/migrations',
  // driver: 'better-sqlite',
  // dbCredentials: {
  //   url: process.env.DB_URL_DEV || 'local.db',
  // },
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DB_URL || '',
    authToken: process.env.TURSO_DB_AUTH_TOKEN,
  },
} satisfies Config
