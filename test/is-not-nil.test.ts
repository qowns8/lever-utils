import { isNotNil } from "../src";

describe('isNotNil', () => {
  test('null 과 undefined 가 아니라면 true 를 리턴', () => {
    expect(isNotNil(null)).toEqual(false)
    expect(isNotNil(undefined)).toEqual(false)
    expect(isNotNil(0)).toEqual(true)
    expect(isNotNil('')).toEqual(true)
    expect(isNotNil()).toEqual(false)
  })
})






