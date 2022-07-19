function solution(order) {
  const conveyor = new Array(order.length).fill(0).map((e,i)=>i+1)
  const tempStack = []

  let targetIndex = 0
  let target = order[targetIndex]
  let count = 0
  let flag = true
  while(flag && target){
    
    if(tempStack[tempStack.length-1] === target){
      tempStack.pop()
      count++
    }else{
      const index = conveyor.findIndex(element => element === target)
      if(index !== -1){

        const moveToTempStack = conveyor.splice(0,index+1)
        moveToTempStack.pop() // 현재 target(택배차에 실은 것) 제외하고 넣기
        moveToTempStack.forEach(element => tempStack.push(element))
        count++
      }else{
        flag = false
      }
    }

    targetIndex++
    target = order[targetIndex]
  }
  
  return count;
}

const checkLoadable = (targetNum, conveyor, tempStack) => {
  if(tempStack[tempStack.length-1] === targetNum) return true
  if(conveyor.includes(targetNum)) return true
  return false
}

console.log(solution(
  // [4, 3, 1, 2, 5]
  [5,4,3,2,1]
));