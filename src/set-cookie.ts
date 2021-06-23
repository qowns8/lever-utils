import { serializeCookie } from './index'

export default (name: string, value: string, options: any) => {
  window.document.cookie = serializeCookie(name, value, options)
}
