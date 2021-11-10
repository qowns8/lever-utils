type Fn<T> = () => T

export default <T>(
  items: Array<[boolean | Fn<boolean>, T | Fn<T>]>,
  defaultValue?: T | Fn<T>,
): T | undefined => {
  const matched = items.find(item => {
    if (item.length !== 2) {
      throw Error('item array should have 2 length')
    }
    return typeof item[0] === 'function' ? item[0]() : item[0]
  })
  const result = matched ? matched[1] : defaultValue
  return typeof result === 'function' ? (result as Fn<T>)() : result
}
