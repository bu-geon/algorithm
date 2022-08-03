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
  const minDistances = bfs(destination, graph, [...distances])

  answer = sources.map(s => {
    return minDistances[s]
  })  

  return answer;
}


const bfs = (start, graph, distances) => {
  const queue = []
  queue.push([start, 0])

  while(queue.length > 0){
    const [cLocation, cDistance] = queue.shift()

    
    graph[cLocation].forEach(next => {
      if(distances[next] !== -1 )return
      queue.push([next, cDistance + 1])
      distances[next] = cDistance +1
    })

  }
  return distances
}

console.log(solution(
  // 3, [[1, 2], [2, 3]], [2, 3], 1
  5, [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]], [1, 3, 5], 5
))