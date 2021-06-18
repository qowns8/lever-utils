import { isNil } from "../src";

describe('isNil', () => {
  test('null 이나 undefined 이면 true 를 리턴', () => {
    expect(isNil(null)).toEqual(true)
    expect(isNil(undefined)).toEqual(true)
    expect(isNil(0)).toEqual(false)
    expect(isNil('')).toEqual(false)
    expect(isNil()).toEqual(true)
  })
})
