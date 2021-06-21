import { isIE } from '../src'

// userAgent from: https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/hh869301(v=vs.85)?redirectedfrom=MSDN
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
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; <64-bit tags>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Safari/<WebKit Rev> Edge/<EdgeHTML Rev>.<Windows Build>',
      }),
    ).toEqual(false)

    expect(
      isIE({
        userAgent:
          'Mozilla/5.0 (WM 10.0; Android <Android Version>; <Device Manufacturer>; <Device Model>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev> Edge/<EdgeHTML Rev>.<Windows Build>',
      }),
    ).toEqual(false)

    expect(
      isIE({
        appName: 'Netscape',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
      }),
    ).toEqual(true)

    expect(
      isIE({
        userAgent:
          'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; Tablet PC 2.0)',
      }),
    ).toEqual(true)

    expect(
      isIE({
        appName: 'Netscape',
        userAgent:
          'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537',
      }),
    ).toEqual(true)

    expect(
      isIE({
        userAgent:
          'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)',
      }),
    ).toEqual(true)

    expect(
      isIE({
        appName: 'Netscape',
        userAgent:
          '~trident~',
      }),
    ).toEqual(true)
  })

  // test('should be ES5 style', () => {
  //   expect(isIE.toString().includes('function')).toEqual(true)
  //   expect(isIE.toString().includes('const')).toEqual(false)
  //   expect(isIE.toString().includes('var')).toEqual(true)
  // })
})
