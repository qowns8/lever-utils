// written in ES5 style for ie11
export default function (navigator: any): boolean {
  // https://madupteam.slack.com/archives/CCLL050S1/p1624254189006100?thread_ts=1624238276.002700&cid=CCLL050S1
  var agent = navigator.userAgent.toLowerCase() // eslint-disable-line
  return (
    (navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) ||
    agent.indexOf('msie') !== -1
  )
}
