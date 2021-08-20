import { parseFilename } from '../src'

describe('parseFilename', () => {
  test('파일명과 확장자를 구분한다.', () => {
    expect(parseFilename('aa.jpg')).toEqual({ name: 'aa', ext: 'jpg' })
    expect(parseFilename('aa.bb.cc')).toEqual({ name: 'aa.bb', ext: 'cc' })
    expect(parseFilename('aa')).toEqual({ name: 'aa', ext: '' })
  })
})
