export default (
  arr: Array<string | RegExp | ((value: string) => boolean)>, // eslint-disable-line
  target: string,
): boolean =>
  arr.some(item => {
    if (typeof item === 'string') {
      return item === target
    }

    if (typeof item === 'function') {
      return item(target)
    }

    return item.test(target)
  })
