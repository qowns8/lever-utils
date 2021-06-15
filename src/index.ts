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

export const validateBiznum = (biznum?: string): boolean => {
  // https://myhappyman.tistory.com/129
  if (!biznum) {
    return false
  }
  const numberMap = biznum
    .replace(/-/gi, '')
    .split('')
    .map(function (d) {
      return parseInt(d, 10)
    })

  if (numberMap.length === 10) {
    const keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5]
    let chk = 0

    keyArr.forEach(function (d, i) {
      chk += d * numberMap[i]
    })

    chk += parseInt(String((keyArr[8] * numberMap[8]) / 10), 10)
    return Math.floor(numberMap[9]) === (10 - (chk % 10)) % 10
  }

  return false
}

export const classNames = (...params: any[]) => {
  const result = params.reduce((acc, value) => {
    if (!value) {
      return acc
    }
    if (typeof value === 'boolean') {
      throw Error('Boolean type is not acceptable')
    }
    if (typeof value === 'string') {
      return acc + ' ' + value
    }
    const classes = Object.entries(value).reduce(
      (acc, [key, value]) => acc + (value ? ' ' + key : ''),
      '',
    )
    return acc + classes
  }, '')

  return result ? result.trim() : undefined
}

export const oneOf = (
  items: Array<[boolean, any]>,
  defaultValue?: any,
): any => {
  const matched = items.find(item => item[0])
  return matched ? matched[1] : defaultValue
}

export const toComma = (val: string | number | null | undefined) =>
  val
    ? Number(val).toLocaleString('ko-KR', { maximumSignificantDigits: 10 })
    : '0'

export const toNumber = (val?: string | number | null) =>
  +String(val).replace(/,/gi, '')
