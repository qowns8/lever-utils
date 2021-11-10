import isNil from './is-nil'

// eslint-disable-next-line
export default (value: any = undefined): boolean => !isNil(value)
