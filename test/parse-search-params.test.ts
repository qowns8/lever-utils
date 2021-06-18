import { parseSearchParams } from "../src";

describe('parseSearchParams', () => {
  test('쿼리스트링 문자열을 객체로 변환한다.', () => {
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
})
