import { camelToKabab, classNames } from './index'

export default (...params: any[]): string => {
  const classString = classNames(...params)
  return classString ? camelToKabab(classString) : classString
}
