export default (biznum?: string): boolean => {
  // https://myhappyman.tistory.com/129
  if (!biznum) {
    return false
  }
  const numberMap = biznum
    .replace(/-/gi, '')
    .split('')
    .map(function (d) {
      return parseInt(d, 10)
    })

  if (numberMap.length === 10) {
    const keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5]
    let chk = 0

    keyArr.forEach(function (d, i) {
      chk += d * numberMap[i]
    })

    chk += parseInt(String((keyArr[8] * numberMap[8]) / 10), 10)
    return Math.floor(numberMap[9]) === (10 - (chk % 10)) % 10
  }

  return false
}
