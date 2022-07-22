function solution(priorities, location) {
  let print = []

  let paper = Array.from({ length: priorities.length }, (v, i) => i)
  let idx = 1

  while (priorities.length) {
    if (priorities[0] >= Math.max(...priorities)) {
      if (paper[0] === location) {
        return idx
      }
      priorities.shift()
      paper.shift()
      idx++
    } else {
      const printedRank = priorities.shift()
      const printedPaper = paper.shift()
      priorities.push(printedRank)
      paper.push(printedPaper)
    }
  }
}
