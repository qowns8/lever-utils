import { IPlainObject, IPureObject } from './types'

export const isNil = (value: any = undefined) =>
  value === undefined || value === null

export const isNotNil = (value: any = undefined) => !isNil(value)

export const parseSearchParams = (url: string): IPlainObject => {
  const params: IPlainObject = {}
  const idx = url.indexOf('?') + 1
  const fromIdx = url.slice(idx)
  // @ts-ignore
  fromIdx.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = decodeURIComponent($3)
  })
  return params
}

export const serializeSearchParams = (obj: IPureObject = {}): string =>
  Object.entries(obj)
    .map(([key, value]: [string, any]) => {
      if (isNil(value)) {
        return
      }
      let valueStr = value
      if (Array.isArray(value)) {
        valueStr = value.join(',')
      }
      return key + '=' + encodeURIComponent(valueStr)
    })
    .filter(isNotNil)
    .join('&')

export const randomStr = (): string =>
  (((1 + Math.random()) * 0x10000) | 0).toString(16)
