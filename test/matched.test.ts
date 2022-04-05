import { matched } from '../src'

describe('matched', () => {
  test('주어진 문자열과 일치하는 지 여부를 리턴', () => {
    expect(matched(['aaa', 'bbb'], 'bbb')).toEqual(true)
    expect(matched(['aaa', 'bbb', /\d\d\d/], '123')).toEqual(true)
    expect(matched(['aaa', 'bbb', /\d\d\d/], '12x')).toEqual(false)
    expect(matched(['aa', 'bb', 'cc', /dd/], 'dd')).toEqual(true)
    expect(
      matched(
        ['aa', (value: string) => value.startsWith('hello')],
        'hello world',
      ),
    ).toEqual(true)

    expect(matched(['aaa', 'bbb'])('bbb')).toEqual(true)
    expect(matched(['aaa', 'bbb'])('bbb')).toEqual(true)
    expect(matched(['aaa', 'bbb', /\d\d\d/])('123')).toEqual(true)
    expect(matched(['aaa', 'bbb', /\d\d\d/])('12x')).toEqual(false)
    expect(matched(['aa', 'bb', 'cc', /dd/])('dd')).toEqual(true)
    expect(
      matched(['aa', (value: string) => value.startsWith('hello')])(
        'hello world',
      ),
    ).toEqual(true)
  })
})
