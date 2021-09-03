import { serializeCookie } from './index'

interface IOptions {
  domain?: string
  path?: string
}

export default (name: string, options: IOptions = {}): void => {
  window.document.cookie = serializeCookie(name, '', {
    ...options,
    'max-age': -1,
  })
}
