import { strMatched } from './index'

export default (
  paths: Array<string | RegExp | ((value: string) => boolean)>, // eslint-disable-line
): boolean => strMatched(paths, window.location.pathname)
