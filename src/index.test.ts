import {
  parseSearchParams,
  randomStr,
  serializeSearchParams,
  isNotNil,
  isNil,
} from './index'

describe('utils/lib', () => {
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
})
