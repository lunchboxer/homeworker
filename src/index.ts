import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import { jwt } from '@elysiajs/jwt'
import { Elysia } from 'elysia'
import { layout } from '$components/layout'
import { index } from '$routes/index'

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ assets: 'public' }))
  .use(
    jwt({
      name: 'jwt',
      secret: process.env.JWT_SECRET as string,
    }),
  )
  .get('/', ({ html }) => html(layout({ contents: index() })))
  .listen({
    port: 3000,
    hostname: '0.0.0.0',
  })

export type ElysiaApp = typeof app

console.info(
  `🥳 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
)
