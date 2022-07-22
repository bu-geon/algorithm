function solution(order) {
  let stack = []
  let answer = 0
  let idx = 0

  for (let i = 1; i <= order.length; i++) {
    if (order[idx] === i) {
      idx += 1
      answer += 1
    } else if (order[idx] < i) {
      break
    } else {
      stack.push(i)
    }

    while (stack.length && order[idx] === stack[stack.length - 1]) {
      stack.pop()
      idx += 1
      answer += 1
    }
  }
  return answer
}
