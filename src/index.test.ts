import { parseSearchParams, randomStr, serializeSearchParams } from './index'

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
  })
  test('randomStr', () => {
    expect(randomStr() !== randomStr()).toEqual(true)
    expect(randomStr().length).toEqual(5)
  })
})
