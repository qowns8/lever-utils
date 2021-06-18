import { oneOf } from "../src";

describe('oneOf', () => {
  test('조건에 따라 하나의 값을 선택한다.', () => {
    expect(oneOf([[true, 2]])).toBe(2)
    expect(
      oneOf([
        [false, 1],
        [false, 2],
        [true, 3],
      ]),
    ).toBe(3)
    expect(
      oneOf([
        [false, 1],
        [true, 2],
        [true, 3],
      ]),
    ).toBe(2)
    expect(
      oneOf([
        [false, 1],
        [true, 2],
      ]),
    ).toBe(2)
    expect(
      oneOf([
        [() => false, 1],
        [() => true, 2],
      ]),
    ).toBe(2)
    expect(
      oneOf([
        [() => false, 1],
        [false, 2],
        [() => true, 3],
      ]),
    ).toBe(3)
    expect(
      oneOf([
        [() => false, 1],
        [false, 2],
        [() => false, 3],
        [true, 4],
      ]),
    ).toBe(4)
    let lazyCount = 0
    oneOf([
      [true, 'a'],
      [
        () => {
          //will be passed
          lazyCount++
          return false
        },
        'b',
      ],
    ])
    expect(lazyCount).toBe(0)
    expect(oneOf([[() => true, () => 'world']], 'hello')).toBe('world')
    expect(oneOf([[false, 1]])).toBe(undefined)
    expect(oneOf([[false, 1]], 0)).toBe(0)
    expect(oneOf([[false, 1]], () => 1)).toBe(1)
  })
})
