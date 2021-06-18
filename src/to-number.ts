export default (val?: string | number | null): number => {
  if (!val) {
    return 0
  }
  if (typeof val === 'number') {
    return val
  }
  return Number(String(val).replace(/,/gi, ''))
}
