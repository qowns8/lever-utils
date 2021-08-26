export default (src: string) => {
  return new Promise(resolve => {
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
