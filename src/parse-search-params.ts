interface IPlainObject {
  [key: string]: string
}

export default (url: string): IPlainObject => {
  const params: IPlainObject = {}
  const idx = url.indexOf('?') + 1
  const fromIdx = url.slice(idx)
  // @ts-ignore
  fromIdx.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = decodeURIComponent($3)
  })
  return params
}
