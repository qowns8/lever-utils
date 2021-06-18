export default (...params: any[]): string => {
  const result = params.reduce((acc, value) => {
    if (!value) {
      return acc
    }
    if (typeof value === 'boolean') {
      throw Error('Boolean type is not acceptable')
    }
    if (typeof value === 'string') {
      return acc + ' ' + value
    }
    const classes = Object.entries(value).reduce(
      (acc, [key, value]) => acc + (value ? ' ' + key : ''),
      '',
    )
    return acc + classes
  }, '')

  return result ? result.trim() : undefined
}
