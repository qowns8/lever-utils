import { toNumber } from "../src";

describe('toNumber', () => {
  test('콤마로 구부된 숫자 문자열을 number 타입으로 변환한다.', () => {
    expect(toNumber('-1,234')).toBe(-1234)
    expect(toNumber('12,345')).toBe(12345)
    expect(toNumber('1,900,000')).toBe(1900000)
    expect(toNumber(1234)).toBe(1234)
    expect(toNumber(null)).toBe(0)
    expect(toNumber(NaN)).toBe(0)
    expect(toNumber(undefined)).toBe(0)
    expect(Number.isNaN(toNumber('abcd'))).toBe(true)
  })
})
