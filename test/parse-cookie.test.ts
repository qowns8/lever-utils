import { parseCookie } from "../src";

describe('getCookie', () => {
  test('cookie 문자열을 key:value 객체로 리턴', () => {
    const cookie1 = 'aa=11; bb=22'
    expect(parseCookie(cookie1).aa).toEqual('11')
    expect(parseCookie(cookie1).bb).toEqual('22')

    const cookie2 = 'confluence.user.history=30364f4c-51bc-4381-9552-38d90ebea36a; atl.xsrf.token=743f15cd6ab0838ef51d3fbfd8015eb09139d48f; ajs_group_id=null; ajs_anonymous_id=%2228303659-e815-4152-9147-bc5b0507ea5b%22; atlassian.xsrf.token=99f15393-229c-44f0-84ec-44068d2f26e3_ef327c58116030e849cf30fb656f8f462e2cc221_lin'
    expect(parseCookie(cookie2)['atl.xsrf.token']).toEqual('743f15cd6ab0838ef51d3fbfd8015eb09139d48f')
  })
})
