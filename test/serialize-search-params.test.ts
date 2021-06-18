import { serializeSearchParams } from "../src";

describe('serializeSearchParams', () => {
  test('쿼리스트링 객체를 문자열로 변환한다.', () => {
    expect(serializeSearchParams({ a: 1, b: 2 })).toEqual('a=1&b=2')
    expect(serializeSearchParams({ a: 1, b: undefined })).toEqual('a=1')
    expect(serializeSearchParams({ a: 1, b: '' })).toEqual('a=1&b=')
    expect(serializeSearchParams({})).toEqual('')
    expect(serializeSearchParams()).toEqual('')
  })
})
