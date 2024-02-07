import clipboard from '$components/icons/clipboard.svg'
import { html } from '$/html'

export const header = (): string => html`
  <header>
    <h1>
      <span class="icon">${clipboard}</span>
      <span class="title">Task Minder</span>
    </h1>
  </header>
`
