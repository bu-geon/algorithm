function solution(X, Y) {
  let obj = new Map()
  for (let i = 0; i < X.length; i++) {
    obj.set(X[i], (obj.get(X[i]) || 0) + 1)
  }

  let arr = []

  for (let j = 0; j < Y.length; j++) {
    if (obj.get(Y[j]) > 0) {
      obj.set(Y[j], obj.get(Y[j]) - 1)
      arr.push(Y[j])
    }
  }

  if (!arr.length) return '-1'
  if (Number(arr.join('')) === 0) return '0'
  let answer = arr.sort((a, b) => b - a).join('')
  return answer
}
