import serializeCookie from './serialize-cookie'

interface IOptions {
  domain?: string
  path?: string
  'max-age'?: number
  expires?: Date
  secure?: boolean
  samesite?: 'strict' | 'lax'
}

export default (name: string, value: string, options: IOptions): void => {
  window.document.cookie = serializeCookie(name, value, options)
}
