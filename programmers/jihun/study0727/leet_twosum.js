/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
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

    for (let index = 0; index < nums.length; index++) {
      const num = nums[index];
      const restNum = target - num
      if(!numsObj[restNum])continue

      console.log(num, restNum)
      if(restNum === num){
        if(numsObj[num].count === 1)continue
        result.push(numsObj[num].index[0], numsObj[num].index[1])
      }else{
        result.push(numsObj[num].index[0], numsObj[restNum].index[0])
      }
      return result
    }
};

console.log(twoSum(
  // [2,7,11,15], 9
  [3,2,4], 6
))