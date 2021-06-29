import { strMatched } from '../src'

describe('strMatched', () => {
  test('주어진 문자열과 일치하는 지 여부를 리턴', () => {
    expect(strMatched(['aaa', 'bbb'], 'bbb')).toEqual(true)
    expect(strMatched(['aaa', 'bbb', /\d\d\d/], '123')).toEqual(true)
    expect(strMatched(['aaa', 'bbb', /\d\d\d/], '12x')).toEqual(false)
    expect(strMatched(['aa', 'bb', 'cc', /dd/], 'dd')).toEqual(true)
  })
})
