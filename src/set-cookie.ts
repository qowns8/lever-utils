import { serializeCookie } from './index'

interface IOptions {
  domain?: string
  path?: string
  'max-age'?: number
  expires?: Date
  secure?: boolean
  samesite?: 'strict' | 'lax'
}

export default (name: string, value: string, options: IOptions) => {
  window.document.cookie = serializeCookie(name, value, options)
}
