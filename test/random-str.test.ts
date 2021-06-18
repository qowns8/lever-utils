import { randomStr } from "../src";

describe('randomStr', () => {

  test('randomStr', () => {
    expect(randomStr() !== randomStr()).toEqual(true)
    expect(randomStr().length).toEqual(5)
  })
})
