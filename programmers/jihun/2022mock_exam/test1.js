function solution(X, Y) {
  var answer = ""
  const XObj = X.split("").reduce((acc, x) => {
    if (!acc[x]) {
      acc[x] = 1
    } else {
      acc[x]++
    }
    return acc
  }, {})
  const YObj = Y.split("").reduce((acc, x) => {
    if (!acc[x]) {
      acc[x] = 1
    } else {
      acc[x]++
    }
    return acc
  }, {})

  const results = []
  const YKeys = Object.keys(YObj)
  for (const XKey in XObj) {
    if(!YKeys.includes(XKey))continue
    const minNum = Math.min( Number(XObj[XKey]), Number(YObj[XKey]))
    results.push({value: XKey, count: minNum})
  }
  
  if(results.length === 0 ) return '-1'
  if(checkZeroOnly(results))return '0'
  answer = makeMaxMatch(results)
  return answer
}

const makeMaxMatch = (results) => {
  const sortedResults = results.sort((a,b) => b.value - a.value)
  return sortedResults.reduce((acc, result) => {
    const {value, count} = result
    for (let index = 0; index < count; index++) {
      acc += value
    }
    return acc
  },'')
}

const checkZeroOnly = (results) => {
  return results.every(result => result.value === '0')
}

console.log(solution("10054325", "545321"))
console.log(solution("00002", "0111"))
