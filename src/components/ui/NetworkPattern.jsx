// Signature visual motif: a sparse node-and-line network, representing both
// AI systems and the connective idea of a continent-wide innovation network.
// Used sparingly — only on dark (navy) sections — as an ambient background layer.
export default function NetworkPattern({ className = '' }) {
  const nodes = [
    [60, 80], [220, 40], [380, 120], [520, 60], [680, 160],
    [140, 220], [320, 260], [480, 210], [640, 280], [760, 100],
    [40, 340], [260, 380], [440, 340], [600, 400], [740, 340],
  ]
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7], [7, 3],
    [7, 8], [8, 9], [5, 10], [6, 11], [11, 12], [12, 13], [13, 14],
    [8, 13], [2, 6],
  ]
  return (
    <svg
      viewBox="0 0 800 440"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#38BDF8"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3.5 : 2} fill="#38BDF8" fillOpacity={i % 3 === 0 ? 0.55 : 0.3} />
      ))}
    </svg>
  )
}
