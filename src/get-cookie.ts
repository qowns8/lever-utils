// https://javascript.info/cookie
// returns the cookie with the given name,
// or undefined if not found
export default (
  name: string,
  cookie: string = document.cookie,
): string | undefined => {
  let matches = cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)',
    ),
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}
