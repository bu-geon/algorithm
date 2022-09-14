/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var longestSubsequence = function(s, k) { 
   
  let current = s

  const sBinValue = parseInt(s,2)
  if(sBinValue === 0 || sBinValue <= k)return s.length

  for (let index = 0; index < current.length; index++) {
    if(current[index] === '0')continue
    current = deleteAt(current, index)
    index--
    

    const currentBinValue = parseInt(current,2)
    if(currentBinValue === 0 || currentBinValue <= k){
      return current.length
    }
  }  

  return 0
};

const deleteAt = (str,  index) => {
  if(str.length === 0) return str
  return str.substring(0,index) + str.substring(index+1)
}

console.log(longestSubsequence(
  // "00101001", 1
  "1001010", 5
));