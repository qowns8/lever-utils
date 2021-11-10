import { clsNms } from '../src'

describe('clsNms', () => {
  test('working similar class-names', () => {
    expect(clsNms({ a: true, b: false })).toEqual('a')
    expect(clsNms({ a: true, b: false }, { c: true, d: true })).toEqual('a c d')
    expect(clsNms('aa', 'bb')).toEqual('aa bb')
    expect(clsNms('aa', undefined, 'cc')).toEqual('aa cc')
    expect(clsNms('aa', null, 'cc')).toEqual('aa cc')

    expect(clsNms('cc', { a: true, b: false })).toEqual('cc a')
    expect(clsNms('xx', { a: true, b: false }, 'vv')).toEqual('xx a vv')
    expect(clsNms({ a: false, b: false })).toEqual(undefined)
  })
  test('use kabab case', () => {
    expect(clsNms('visible', { hasContent: true })).toEqual(
      'visible has-content',
    )
    expect(clsNms('hasContent', { visible: true })).toEqual(
      'has-content visible',
    )
  })
})
