const minDistance = (dist, visited) => {
    let min = Number.MAX_VALUE; // lưu trữ trọng số nhỏ nhất của các đỉnh hiện tại
    let minIdx = -1; // lưu trữ vị trí của đỉnh có trọng số nhỏ nhất

    for(let v = 0; v < dist.length; v++) {
        if(!visited[v] && dist[v] < min) {
           min = dist[v];
           minIdx = v;
        }
    }

    return minIdx;
}

const printDistance = (dist, source) => {
    for(let i = 0; i < dist.length; i++) {
        console.log('Distance shortest from ' + source + ' to ' + i + ' is: ' + dist[i])
    }
}

const dijkstra = (graph, source) => {
    let V = graph.length;

    let dist = new Array(V); // array lưu lại đường đi ngắn nhất từ đỉnh nguồn tới tất cả đỉnh còn lại trong đồ thị
    let visited = new Array(V); // array lưu trữ lại giá trị xem đỉnh đã được duyệt chưa 

    for(let i = 0; i < V; i++) {
        dist[i] = Number.MAX_VALUE;
        visited[i] = false;
    }

    dist[source] = 0;

    for(let count = 0; count < V - 1; count++) {
        let u = minDistance(dist, visited); // đỉnh có trọng số nhỏ nhất trong các đỉnh hiện tại
        visited[u] = true;

        for(let v = 0; v < V; v++) {
            if(
                !visited[v] &&
                graph[u][v] != 0 &&
                dist[u] + graph[u][v] < dist[v]
            ) { 
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    printDistance(dist, source);
}

[  ]

const graph = [
    [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
    [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
    [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
    [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
    [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
    [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
    [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
    [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
    [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ]
]

const source = 0;

dijkstra(graph, source);