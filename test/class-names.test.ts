import { classNames } from '../src'

describe('class-names', () => {
  test('조건에 따라 클레스 문지열을 생성한다.', () => {
    expect(classNames({ a: true, b: false })).toEqual('a')
    expect(classNames({ a: true, b: false }, { c: true, d: true })).toEqual(
      'a c d',
    )
    expect(classNames('aa', 'bb')).toEqual('aa bb')
    expect(classNames('aa bb', 'cc')).toEqual('aa bb cc')
    expect(classNames('aa bb', 'cc', 'dd ee')).toEqual('aa bb cc dd ee')
    expect(classNames('aa', undefined, 'cc')).toEqual('aa cc')
    expect(classNames('aa', null, 'cc')).toEqual('aa cc')

    expect(classNames('cc', { a: true, b: false })).toEqual('cc a')
    expect(classNames('xx', { a: true, b: false }, 'vv')).toEqual('xx a vv')
    expect(classNames({ a: false, b: false })).toEqual(undefined)
  })
})
