import isNil from './is-nil'
import isNotNil from './is-not-nil'

interface IPureObject {
  [key: string]: string | number | boolean | undefined | null
}

export default (obj: IPureObject = {}): string =>
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
