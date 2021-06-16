import {
  parseSearchParams,
  randomStr,
  serializeSearchParams,
  isNotNil,
  isNil,
  validateBiznum,
  classNames,
  oneOf,
  toComma,
  toNumber,
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
    expect(validateBiznum('1198702720')).toEqual(true)
    expect(validateBiznum('4528700430')).toEqual(true)
  })

  test('classNames', () => {
    expect(classNames({ a: true, b: false })).toEqual('a')
    expect(classNames({ a: true, b: false }, { c: true, d: true })).toEqual(
      'a c d',
    )
    expect(classNames('aa', 'bb')).toEqual('aa bb')
    expect(classNames('aa', undefined, 'cc')).toEqual('aa cc')
    expect(classNames('aa', null, 'cc')).toEqual('aa cc')

    expect(classNames('cc', { a: true, b: false })).toEqual('cc a')
    expect(classNames('xx', { a: true, b: false }, 'vv')).toEqual('xx a vv')
    expect(classNames({ a: false, b: false })).toEqual(undefined)
  })

  test('oneOf', () => {
    expect(oneOf([[true, 2]])).toBe(2)
    expect(
      oneOf([
        [false, 1],
        [false, 2],
        [true, 3],
      ]),
    ).toBe(3)
    expect(
      oneOf([
        [false, 1],
        [true, 2],
        [true, 3],
      ]),
    ).toBe(2)
    expect(
      oneOf([
        [false, 1],
        [true, 2],
      ]),
    ).toBe(2)
    expect(oneOf([[false, 1]])).toBe(undefined)
    expect(oneOf([[false, 1]], 'zzz')).toBe('zzz')
  })

  test('toComma', () => {
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

  test('toNumber', () => {
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
