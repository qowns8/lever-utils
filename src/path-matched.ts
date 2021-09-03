import { strMatched } from './index'

export default (
  paths: Array<string | RegExp | ((value: string) => Boolean)>,
): boolean => strMatched(paths, window.location.pathname)
