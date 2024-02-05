import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import { Elysia } from 'elysia'
import { layout } from '$components/layout'

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ assets: 'public' }))
  .get('/', ({ html }) => html(layout({ contents: '<p>stuff</p>' })))
  .listen(3000)

export type ElysiaApp = typeof app

console.info(
  `🥳 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
)
