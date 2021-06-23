import { serializeCookie } from './index'

export default (name: string, options: any = {}) => {
  window.document.cookie = serializeCookie(name, '', {
    ...options,
    'max-age': -1,
  })
}
