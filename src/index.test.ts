import {
  parseSearchParams,
  randomStr,
  serializeSearchParams,
  isNotNil,
  isNil,
  validateBiznum,
} from './index'

describe('Lever utils', () => {
  test('parseSearchParams', () => {
    expect(parseSearchParams('?aa=11')).toEqual({ aa: '11' })
    expect(parseSearchParams('?aa=11&bb=22')).toEqual({ aa: '11', bb: '22' })
    expect(parseSearchParams('')).toEqual({})
    expect(parseSearchParams('https://biz.lever.me?a=1&b=2&c=3')).toEqual({
      a: '1',
      b: '2',
      c: '3',
    })
    const str: string = parseSearchParams('?aa=11&bb=22').aa // check type of return value
    expect(str).toEqual('11')
  })

  test('serializeSearchParams', () => {
    expect(serializeSearchParams({ a: 1, b: 2 })).toEqual('a=1&b=2')
    expect(serializeSearchParams({ a: 1, b: undefined })).toEqual('a=1')
    expect(serializeSearchParams({ a: 1, b: '' })).toEqual('a=1&b=')
    expect(serializeSearchParams({})).toEqual('')
    expect(serializeSearchParams()).toEqual('')
  })

  test('randomStr', () => {
    expect(randomStr() !== randomStr()).toEqual(true)
    expect(randomStr().length).toEqual(5)
  })

  test('isNil', () => {
    expect(isNil(null)).toEqual(true)
    expect(isNil(undefined)).toEqual(true)
    expect(isNil(0)).toEqual(false)
    expect(isNil('')).toEqual(false)
    expect(isNil()).toEqual(true)
  })

  test('isNotNil', () => {
    expect(isNotNil(null)).toEqual(false)
    expect(isNotNil(undefined)).toEqual(false)
    expect(isNotNil(0)).toEqual(true)
    expect(isNotNil('')).toEqual(true)
    expect(isNotNil()).toEqual(false)
  })

  test('validateBiznum', () => {
    expect(validateBiznum('blabla')).toEqual(false)
    expect(validateBiznum('1234567890')).toEqual(false)
    expect(validateBiznum('')).toEqual(false)
    expect(validateBiznum()).toEqual(false)
    expect(validateBiznum('2341241242')).toEqual(false) // 아무거나
    expect(validateBiznum('1198706634')).toEqual(true) // 매드업
    expect(validateBiznum('2208162517')).toEqual(true) // 네이버
    expect(validateBiznum('1248100998')).toEqual(true) // 삼성전자
    expect(validateBiznum('1198702720')).toEqual(true) // 주빅밴드앤코
  })
})
