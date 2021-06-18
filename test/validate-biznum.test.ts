import { validateBiznum } from "../src";

describe('validateBiznum', () => {
  test('사업자번호 유효성 여부를 검증한다.', () => {
    expect(validateBiznum('blabla')).toEqual(false)
    expect(validateBiznum('1234567890')).toEqual(false)
    expect(validateBiznum('')).toEqual(false)
    expect(validateBiznum()).toEqual(false)
    expect(validateBiznum('2341241242')).toEqual(false) // 아무거나
    expect(validateBiznum('1198706634')).toEqual(true) // 매드업
    expect(validateBiznum('2208162517')).toEqual(true) // 네이버
    expect(validateBiznum('1248100998')).toEqual(true) // 삼성전자
    expect(validateBiznum('1198702720')).toEqual(true)
    expect(validateBiznum('4528700430')).toEqual(true)
  })
})
