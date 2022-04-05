import strMatched from './str-matched'

export default (
  arr: Array<string | RegExp | ((value: string) => boolean)>, // eslint-disable-line
  target?: string,
): any =>
  target ? strMatched(arr, target) : (target: string) => strMatched(arr, target)
