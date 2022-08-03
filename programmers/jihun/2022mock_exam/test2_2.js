function solution(topping) {
  var answer = 0;
 
  const mapR = new Map();
  const mapL = new Map();
  
  topping.forEach(t => {
    if(!mapR.has(t)){
      mapR.set(t,1)
    }else{
      const tCount = mapR.get(t)
      mapR.set(t,tCount+1)
    }
  })

  for (let index = 0; index < topping.length; index++) {
    const currentTopping = topping[index];
    const toppingRCount = mapR.get(currentTopping)
    toppingRCount === 1?mapR.delete(currentTopping): mapR.set(currentTopping, toppingRCount-1)
    
    if(!mapL.has(currentTopping)){
      mapL.set(currentTopping, 1)
    }
    else{
      const toppingLCount = mapL.get(currentTopping)
      mapL.set(currentTopping, toppingLCount + 1)
    }
    
    if(mapL.size === mapR.size)answer++
  }

  return answer;
}

console.log(solution(
  [1, 2, 1, 3, 1, 4, 1, 2]
))