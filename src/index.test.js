import {getSearchParams} from './index'

describe('utils/lib', () => {
  test('getSearchParam', () => {
    expect(getSearchParams('?aa=11')).toEqual({aa: '11'})
    expect(getSearchParams('?aa=11&bb=22')).toEqual({aa: '11', bb: '22'})
    expect(getSearchParams('')).toEqual({})
  })
})
