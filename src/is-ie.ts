export default (navigator: any): boolean => {
  // https://madupteam.slack.com/archives/CCLL050S1/p1624254189006100?thread_ts=1624238276.002700&cid=CCLL050S1
  const agent = navigator.userAgent.toLowerCase()
  return (
    (navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) ||
    agent.indexOf('msie') !== -1
  )
}
