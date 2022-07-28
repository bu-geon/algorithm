function solution(priorities, location) {
  var answer = 0;
 
  let index = 0
  while(true){
    const current = priorities[index]
    if(current === -1){
      index++
      if(index >= priorities.length){
        index = 0
      }
      continue  
    }


    const hasHigher = priorities.some(p => p > current)

    if(!hasHigher){
      priorities[index] = -1
      answer++
      if(location === index)return answer
    }

    index++
    if(index >= priorities.length){
      index = 0
    }

  }
}

console.log(solution(
  // [2, 1, 3, 2], 2, 1
  [1, 1, 9, 1, 1, 1], 0
));