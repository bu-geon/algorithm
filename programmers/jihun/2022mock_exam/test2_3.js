function solution(n, roads, sources, destination) {
  var answer = [];

  const graph = roads.reduce((acc, road) => {
    const [from, to] = road
    acc[from].push(to)
    acc[to].push(from)

    return acc
  }, Array.from(new Array(n+1), ()=>new Array()))

  console.log(graph)

  const distances = new Array(n+1).fill(-1)
  distances[destination] = 0
  bfs(destination, graph, distances)

  answer = sources.map(s => {
    return distances[s]
  })  

  return answer;
}


const bfs = (start, graph, distances) => {
  const queue = new Queue()
  queue.enqueue([start, 0])

  while(queue.size() > 0){
    const [cLocation, cDistance] = queue.dequeue()
    
    graph[cLocation].forEach(next => {
      if(distances[next] !== -1 )return
      queue.enqueue([next, cDistance + 1])
      distances[next] = cDistance +1
    })
  }
  return distances
}

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

console.log(solution(
  // 3, [[1, 2], [2, 3]], [2, 3], 1
  5, [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]], [1, 3, 5], 5
))