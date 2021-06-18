export default (val: string | number | null | undefined): string =>
  val
    ? Number(val).toLocaleString('ko-KR', { maximumSignificantDigits: 10 })
    : '0'
