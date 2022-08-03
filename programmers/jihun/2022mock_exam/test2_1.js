function solution(number) {
  var answer = 0

  const TARGET = 0
  for (let index = 0; index < number.length; index++) {
    const map = new Map()
    const numA = number[index];

    const targetOfTwo = TARGET - numA
    for (let j = index+1; j < number.length; j++) {
      if(map.has(targetOfTwo - number[j])){
        const currentIndex = map.get(targetOfTwo - number[j])
        answer += currentIndex.length
      }
      const prev = map.get(number[j]) || []
      map.set(number[j], [...prev, j])
    }
    console.log(map)
  }

  return answer;
}

console.log(solution(
  [-2, 1, 2, 2, 2, 0]
  // [-2, 3, 0, 2, -5]
  // [-3,3,0,3,-3]
  // [1,2,-3,3,0,0,0,0,0,0,0,0]
))