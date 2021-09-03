import { IPlainObject } from './types'

type Fn = (str: string) => string // eslint-disable-line

export default (
  cookie: string,
  decode: Fn = decodeURIComponent,
): IPlainObject => {
  const result: IPlainObject = {}
  cookie
    .split(';')
    .map(str => str.trim())
    .forEach((pair: string) => {
      const [key, value] = pair.split('=')
      result[key] = decode(value)
    })

  return result
}
