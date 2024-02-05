import { html } from '../html'
import { footer } from '$components/footer'
import { header } from '$components/header'

export const layout = ({ contents }: { contents: string }): string =>
  html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
     <meta charset="utf-8" />
  <!-- <link rel="icon" href="public/favicon.png" /> -->
  <link rel="preload" href="public/fonts/JetBrainsMono-ExtraBold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="public/fonts/JetBrainsMono-Thin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" type="text/css" href="public/styles.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

    <body>
      ${header()}
      <main>
      ${contents}
      </main>
      ${footer()}
    </body>
  </html>
  `
