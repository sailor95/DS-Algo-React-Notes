# Graph

- Adjacency List
  - **Good**: Take less space
  - **Good**: Faster to iterate over all edges
  - **Bad**: Can be slower to lookup specific edge
- Adjacency Matrix
  - **Bad**: Takes up more space
  - **Bad**: Slower to iterate over all edges
  - **Good**: Faster to lookup specific edge

## Big O

- V: Vertex
- E: Edge

| Operation     | Adjacency List | Adjacency Matrix |
|---------------|----------------|------------------|
| Add Vertex    | O(1)           | O(V^2)           |
| Add Edge      | O(1)           | O(1)             |
| Remove Vertex | O(V + E)       | O(V^2)           |
| Remove Edge   | O(E)           | O(1)             |
| Query         | O(V + E)       | O(1)             |
| Storage       | O(V + E)       | O(V^2)           |
