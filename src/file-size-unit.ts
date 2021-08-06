export default (value: number, upper = true): string => {
  const units = ['B', 'KB', 'MB', 'GB']
  const loop = (rest: number, count = 0): string => {
    const unit = units[count]
    if (rest < 1024) {
      return `${Math.floor(rest * 100) / 100}${
        upper ? unit : unit.toLowerCase()
      }`
    }
    return loop(rest / 1024, count + 1)
  }
  return loop(value)
}
