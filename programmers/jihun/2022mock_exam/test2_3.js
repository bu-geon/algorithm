function solution(n, roads, sources, destination) {
  var answer = [];

  const graph = roads.reduce((acc, road) => {
    const [from, to] = road
    acc[from].push(to)
    acc[to].push(from)

    return acc
  }, Array.from(new Array(n+1), ()=>new Array()))

  console.log(graph)

  const check = new Array(n+1).fill(false)
  const distances = new Array(n+1).fill(Number.MAX_SAFE_INTEGER)
  distances[destination] = 0
  const minDistances = bfs(destination, graph, check, [...distances])

  answer = sources.map(s => {
    if(minDistances[s] === Number.MAX_SAFE_INTEGER)return -1
    return minDistances[s]
  })  

  return answer;
}


const bfs = (start, graph, check, distances) => {
  const queue = []
  check[start] = true
  graph[start].forEach(location => {
    queue.push([location, 1])
    check[location] = true
  })

  while(queue.length > 0){
    const [cLocation, cDistance] = queue.shift()
    console.log(cLocation)
    if(distances[cLocation] > cDistance)distances[cLocation] = cDistance 

    graph[cLocation].forEach(next => {
      if(check[next])return
      queue.push([next, cDistance + 1])
      check[next] = true
    })

  }
  return distances
}

console.log(solution(
  // 3, [[1, 2], [2, 3]], [2, 3], 1
  5, [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]], [1, 3, 5], 5
))