import { toComma } from "../src";

describe('toComma', () => {
  test('천 단위 콤파 표시된 문자열을 리턴한다.', () => {
    expect(toComma(100000)).toBe('100,000')
    expect(toComma(10.234)).toBe('10.234')
    expect(toComma(-10.234)).toBe('-10.234')
    expect(toComma(-10123.234)).toBe('-10,123.234')
    expect(toComma(-10123.23434)).toBe('-10,123.23434')
    expect(toComma(null)).toBe('0')
    expect(toComma(NaN)).toBe('0')
    expect(toComma(undefined)).toBe('0')
    expect(toComma('abc')).toBe('NaN')
  })
})
