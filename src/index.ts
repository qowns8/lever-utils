import { IPlainObject } from './types'

export const getSearchParams = (url: string): IPlainObject => {
  const params: IPlainObject = {}
  const idx = url.indexOf('?') + 1
  const fromIdx = url.slice(idx)
  // @ts-ignore
  fromIdx.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = decodeURIComponent($3)
  })
  return params
}

export const randomStr = () =>
  (((1 + Math.random()) * 0x10000) | 0).toString(16)
