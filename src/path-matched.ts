import strMatched from './str-matched'

export default (
  paths: Array<string | RegExp | ((value: string) => boolean)>, // eslint-disable-line
): boolean => strMatched(paths, window.location.pathname)
