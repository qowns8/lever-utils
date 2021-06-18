import { randomStr } from "../src";

describe('randomStr', () => {
  test('5개의 문자로 구성된 랜덤 문자열을 리턴', () => {
    expect(randomStr() !== randomStr()).toEqual(true)
    expect(randomStr().length).toEqual(5)
  })
})
