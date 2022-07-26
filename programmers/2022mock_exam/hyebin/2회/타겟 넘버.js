function solution(numbers, target) {
  var answer = 0
  let n = numbers.length
  function DFS(level, sum) {
    if (level === n) {
      if (sum === target) answer++
      return
    } else {
      DFS(level + 1, sum + numbers[level])
      DFS(level + 1, sum - numbers[level])
    }
  }
  DFS(0, 0)
  return answer
}
