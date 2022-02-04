module.exports = function check(str, bracketsConfig) {
  const result = []
  for(let i=0; i<str.length; i++){
    const s = str[i]
    if (result.length === 0 || result[result.length - 1] !== s) {
      const closeBracket = bracketsConfig.find((arr) => {
        return arr[0] === s
      })
      if (closeBracket == undefined) {
        return false
      }
      result.push(closeBracket[1])
    } else {
      result.pop()
    }
  }
  return result.length === 0
}
