import clipboard from './icons/clipboard.svg'
import { html } from '../html'

export const header = (): string => html`
  <header>
    <h1>
      <span class="icon">${clipboard}</span>
      <span class="title">Homework(er)</span>
    </h1>
  </header>
`
