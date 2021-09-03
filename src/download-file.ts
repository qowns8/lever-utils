export default (url: string, filename: string): void => {
  // blob 데이터 또는 동일출처 url만 사용 가능
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename) // or any other extension
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
