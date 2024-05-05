/**
 * dist = [0, INF, INF, INF, INF, INF, INF, INF, INF]
 * visited = [true, false, false, false, false, false, false, false, false]
 */

const minDistance = (dist, visited) => {
    let min = Number.MAX_VALUE;
    let minIdx = -1;

    for(let v = 0; v < dist.length; v++) {
        if(!visited[v] && dist[v] < min) {
            min = dist[v];
            minIdx = v;
        }
    }

    return minIdx;
}

const logDistanceFromSource = (dist, source) => {
    for(let v = 0; v < dist.length; v++) {
        console.log(`Distance from ${source} to ${v} is: ` + dist[v]);
    }
}

const dijkstra = (graph, source) => {
    let V = graph.length;
    let dist = new Array(V); // lưu đường đi ngắn nhất từ source tới các đỉnh khác trong graph
    let visited = new Array(V); // để kiểm tra xem đã visit qua các đỉnh chưa

    for(let i = 0; i < V; i++) {
        dist[i] = Number.MAX_VALUE;
        visited[i] = false;
    }

    dist[source] = 0;

    for(let count = 0; count < V - 1; count++) {
        let u = minDistance(dist, visited);
        console.log({ u });

        visited[u] = true;

        for(let v = 0; v < V; v++) {
            if(
                !visited[v] &&
                graph[u][v] !== 0 && 
                dist[u] + graph[u][v] < dist[v]
            ) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    logDistanceFromSource(dist, source);
};

const graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0],
];

dijkstra(graph, 0);