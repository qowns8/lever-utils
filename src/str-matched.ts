export default (arr: Array<string | RegExp>, target: string): boolean =>
  arr.some(item =>
    typeof item === 'string' ? item === target : item.test(target),
  )
