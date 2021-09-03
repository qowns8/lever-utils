interface IOptions {
  domain?: string
  path?: string
  'max-age'?: number
  expires?: Date
  secure?: boolean
  samesite?: 'strict' | 'lax' | boolean
  httpOnly?: boolean
}

export default (
  name: string,
  value: string,
  options: IOptions = {},
  encode: any = encodeURIComponent,
): string => {
  const opt: any = {
    path: '/',
    ...options,
  }

  if (options.expires instanceof Date) {
    opt.expires = options.expires.toUTCString()
  }

  let updatedCookie = encode(name) + '=' + encode(value)

  for (const optionKey in opt) {
    const optionValue = opt[optionKey]
    if (!optionValue) {
      continue
    }
    updatedCookie += '; ' + optionKey
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }

  return updatedCookie
}
