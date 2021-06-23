export default (
  name: string,
  value: string,
  options: any = {},
  encode: any = encodeURIComponent,
) => {
  options = {
    path: '/',
    ...options,
  }

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString()
  }

  let updatedCookie = encode(name) + '=' + encode(value)

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey
    let optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }

  return updatedCookie
}
