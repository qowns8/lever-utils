export default (navigator: any) => {
  const agent = navigator.userAgent.toLowerCase()
  return (
    (navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) ||
    agent.indexOf('msie') !== -1
  )
}
