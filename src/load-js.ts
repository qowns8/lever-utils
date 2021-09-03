export default (src: string): Promise<void> => {
  return new Promise((resolve): void => {
    const headTag = document.getElementsByTagName('head')[0]
    const newScript = document.createElement('script')
    newScript.type = 'text/javascript'
    newScript.onload = () => {
      resolve(undefined)
    }
    newScript.src = src
    headTag.appendChild(newScript)
  })
}
