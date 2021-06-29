import { strMatched } from './index'

export default (paths: Array<string | RegExp>): boolean =>
  strMatched(paths, window.location.pathname)
