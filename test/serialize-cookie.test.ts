import { serializeCookie } from '../src'

describe('serializeCookie', () => {
  test('설정할 쿠키 문자열을 생성한다.', () => {
    expect(serializeCookie('aa', '11', { httpOnly: true })).toEqual(
      'aa=11; path=/; httpOnly',
    )
    expect(
      serializeCookie('user', 'John', { secure: true, 'max-age': 3600 }),
    ).toEqual('user=John; path=/; secure; max-age=3600')
  })
  test('samesite option', () => {
    expect(serializeCookie('user', 'John', { samesite: true })).toEqual(
      'user=John; path=/; samesite',
    )
    expect(serializeCookie('user', 'John', { samesite: false })).toEqual(
      'user=John; path=/',
    )
    expect(serializeCookie('user', 'John', { samesite: 'lax' })).toEqual(
      'user=John; path=/; samesite=lax',
    )
    expect(serializeCookie('user', 'John', { samesite: 'strict' })).toEqual(
      'user=John; path=/; samesite=strict',
    )
  })
})
