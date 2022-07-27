class Queue{
  constructor(){
      this.queue = [];
      this.index = 0;
  }
  enqueue(param){
      this.queue.push(param);
  }
  dequeue(){
      const result = this.queue[this.index];
      this.index++;
      return result;
  }
  size(){
      return this.queue.length - this.index;
  }
}

function bfs(numbers, target){
  let answer = 0;
  const queue = new Queue();
//     값, depth, sum(합);
  queue.enqueue([ 0, numbers[0]]);
  queue.enqueue([ 0, -numbers[0]]);
  while(queue.size() > 0){
      const [depth, sum] = queue.dequeue();
      if(depth === (numbers.length -1)){
          if(sum === target) answer++;
          continue;
      }else{
          queue.enqueue([ depth+1, sum+numbers[depth+1]]);
          queue.enqueue([ depth+1, sum-numbers[depth+1]]);
      }
  }
  return answer;
}

function solution(numbers, target) {
  var answer = 0;
  answer = bfs(numbers, target);
  return answer;
}