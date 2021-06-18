import { isIE } from '../src'

describe('isIE', () => {
  test('return true when Internet Explorer', () => {
    expect(
      isIE({
        userAgent:
          'Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0;  rv:11.0) like Gecko',
      }),
    ).toEqual(true)
    expect(
      isIE({
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
      }),
    ).toEqual(false)

    expect(
      isIE({
        appName: 'Netscape',
        userAgent:
          '~trident~',
      }),
    ).toEqual(true)
  })
})
