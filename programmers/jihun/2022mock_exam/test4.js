function solution(beginning, target) {
  var answer = 0;
  const diff = Array.from(new Array(beginning.length), ()=>new Array(beginning[0].length))
  const minFalseCount = Math.min(target.length, target[0].length)
  
  for (let row = 0; row < target.length; row++) {
    for (let col = 0; col < target[0].length; col++) {
      diff[row][col] = target[row][col] === beginning[row][col]
    }
  }
  
  let falseDiff = countFalse(diff)
  while(falseDiff.falseCount !== 0 && falseDiff.falseCount >= minFalseCount){
    const {cols, rows, colMax, rowMax} = falseDiff
    if(colMax >= rowMax){
      cols.forEach((falsesInCol,i) => {
        if( falsesInCol === colMax ){
          flipCol(diff,i)
          answer++
        }
      })

    }else{
      // flipRows
      rows.forEach((flasesInRow,i) => {
        if( flasesInRow === rowMax ){
          flipRow(diff, i)
          answer++
        }
      })
    }

    falseDiff = countFalse(diff)
  }
  if(answer === 0 || falseDiff.falseCount !== 0)return -1
  return answer;
}

const flipCol = (array, targetCol) => {
  for (let row = 0; row < array.length; row++) {
    array[row][targetCol] = !array[row][targetCol]
  }
}

const flipRow = (array, targetRow) => {
  for (let col = 0; col < array[0].length; col++) {
    array[targetRow][col] = !array[targetRow][col]
  }
}

const countFalse = (array) => {
  const rows = new Array(array.length).fill(0)
  const cols = new Array(array[0].length).fill(0)
  let falseCount = 0
  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[0].length; col++) {
      if(!array[row][col]){
        cols[col]++
        rows[row]++
        falseCount++
      }
    }
  }

  const colMax = cols.reduce((acc,num)=>{
    if( num > acc) return num
    return acc
  },0)
  const rowMax = rows.reduce((acc,num)=>{
    if( num > acc) return num
    return acc
  },0)
  return {rows, cols, rowMax, colMax, falseCount}
}

console.log(solution(
  [[0, 1, 0, 0, 0], [1, 0, 1, 0, 1], [0, 1, 1, 1, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]],
  [[0, 0, 0, 1, 1], [0, 0, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]
));
