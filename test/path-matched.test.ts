import { pathMatched } from '../src'

test('pathMatched', () => {
  Object.defineProperty(window, 'location', {
    value: {
      pathname: '/ads/create',
    },
    writable: true,
  })
  expect(pathMatched(['/ads/manage', '/ads/update'])).toEqual(false)
  expect(pathMatched(['/ads/manage', '/ads/update', '/ads/create'])).toEqual(
    true,
  )
  expect(pathMatched(['/ads/manage', '/ads/update', /\/ads\/.+/])).toEqual(true)
})
