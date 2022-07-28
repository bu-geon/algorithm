/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target, ignoreIndex) {
    const numsObj = nums.reduce((acc,num,index) => {
      if(!acc[num]){
        acc[num] = {count: 1, index: [index]}
      }else{
        acc[num].count++
        acc[num].index.push(index)
      }

      return acc
    },{})

    let result = []

    for (let index = ignoreIndex + 1; index < nums.length; index++) {
      const num = nums[index];
      const restNum = target - num
      if(!numsObj[restNum])continue

      result.push(numsObj[num].index[0], numsObj[restNum].index[0])
      
      return result
    }

    return false
};

const threeSum = (nums, target) => {
  let results = []

  for (let index = 0; index < nums.length; index++) {
    const restTarget = target - nums[index]
    const restSum = twoSum(nums, restTarget, index)

    if(restSum)results.push([...restSum, index])

  }
  return results
}

// console.log(twoSum(
//   // [2,7,11,15], 9
//   [3,2,4], 6
// ))

console.log(twoSum(
  [1,2,3,4,5,4,3,2,1], 6 
))