import { fileSizeUnit } from '../src'

describe('file-size-unit', () => {
  test('upper 인자 false면 소문자로', () => {
    expect(fileSizeUnit(1023, false)).toEqual('1023b')
  })
  test('B KB, MB, B 단위', () => {
    expect(fileSizeUnit(1023)).toEqual('1023B')
    expect(fileSizeUnit(12)).toEqual('12B')
    expect(fileSizeUnit(0)).toEqual('0B')
    expect(fileSizeUnit(1024)).toEqual('1KB')
    expect(fileSizeUnit(1024, false)).toEqual('1kb')
    expect(fileSizeUnit(1024 * 1024)).toEqual('1MB')
    expect(fileSizeUnit(1024 * 1024 * 1024)).toEqual('1GB')
  })
  test('소수점 단위 3번째 자리에서 버림하고 표시', () => {
    expect(fileSizeUnit(1024 * 1024 + 49 * 1024)).toEqual('1.04MB')
    expect(fileSizeUnit(1024 * 1024 + 512 * 1024)).toEqual('1.5MB')
    expect(fileSizeUnit(1024 * 1024 + 511 * 1024)).toEqual('1.49MB')
    expect(fileSizeUnit(1024 + 234)).toEqual('1.22KB')
  })
})
