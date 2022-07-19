function solution(want, number, discount) {
  var answer = 0
  // want + number 쓰기편하게
  const wants = want.reduce((acc, element, i) => {
    acc.push({ product: element, number: number[i] })
    return acc
  }, [])

  // 해당 구간 일치 여부 판단 ( want가 number만큼 있는지 )
  let left = 0
  let right = 9
  let count = 0
  while(right - left >= wants.length){
    if(checkEnoughDiscount(left, right, discount, wants))count++
    right = right + 1 > discount.length -1 ? discount.length-1 : right + 1
    left ++
  }

  return count
}

const checkEnoughDiscount = (left, right, discount, wants) => {
  const discountAcc = {}
  for (let index = left; index <= right; index++) {
    const product = discount[index]
    if(!discountAcc[product]){discountAcc[product] = 1}
    else{discountAcc[product]++}
  }

  return wants.every(want => {
    const {product, number} = want
    if(!discountAcc[product])return false
    return discountAcc[product] >= number
  })
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
)
// console.log(solution(
//   ["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]
// ))
