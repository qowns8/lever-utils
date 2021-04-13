import { getSearchParams, randomStr } from './index'

describe('utils/lib', () => {
  test('getSearchParam', () => {
    expect(getSearchParams('?aa=11')).toEqual({ aa: '11' })
    expect(getSearchParams('?aa=11&bb=22')).toEqual({ aa: '11', bb: '22' })
    expect(getSearchParams('')).toEqual({})
    expect(getSearchParams('https://biz.lever.me?a=1&b=2&c=3')).toEqual({
      a: '1',
      b: '2',
      c: '3',
    })
    const str: string = getSearchParams('?aa=11&bb=22').aa  // check type of return value
    expect(str).toEqual('11')
  })
  test('randomStr', () => {
    expect(randomStr() !== randomStr()).toEqual(true)
    expect(randomStr().length).toEqual(5)
  })
})
