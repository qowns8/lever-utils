import { getCookie } from "../src";

describe('getCookie', () => {
  test('name 에 해당하는 쿠키값을 리턴', () => {
    const cookie = 'aa=11; bb=22'
    expect(getCookie('aa', cookie)).toEqual('11')
    expect(getCookie('bb', cookie)).toEqual('22')
  })
})
