import isNil from './is-nil'

export default (value: any = undefined): boolean => !isNil(value)
