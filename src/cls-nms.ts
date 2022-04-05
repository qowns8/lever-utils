import camelToKabab from './camel-to-kabab'
import classNames from './class-names'

export default (...params: any[]): string => {
  const classString = classNames(...params)
  return classString ? camelToKabab(classString) : classString
}
