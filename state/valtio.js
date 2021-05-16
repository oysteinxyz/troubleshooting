import { proxy } from 'valtio'

export const state = proxy({ count: 0, text: 'hello' })

setInterval(() => {
  ++state.count
}, 1000)