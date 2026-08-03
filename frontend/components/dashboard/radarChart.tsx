interface RadarChartProps {
  data: { label: string; value: number }[];
}

const RadarChart = ({ data }: RadarChartProps) => {
  const size = 220;
  const center = size / 2;
  const maxRadius = 80;
  const levels = 4;
  const angleStep = (Math.PI * 2) / data.length;

  const getPoint = (index: number, value: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const radius = (value / 100) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  const gridPolygons = Array.from({ length: levels }, (_, level) => {
    const ratio = (level + 1) / levels;
    const points = data
      .map((_, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const radius = maxRadius * ratio;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
    return points;
  });

  const dataPoints = data.map((item, index) => getPoint(index, item.value));
  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto h-auto w-full max-w-56">
      {gridPolygons.map((points, index) => (
        <polygon
          key={index}
          points={points}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      ))}

      {data.map((_, index) => {
        const end = getPoint(index, 100);
        return (
          <line
            key={index}
            x1={center}
            y1={center}
            x2={end.x}
            y2={end.y}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        );
      })}

      <polygon
        points={dataPolygon}
        fill="rgba(59, 130, 246, 0.2)"
        stroke="#3b82f6"
        strokeWidth="2"
      />

      {dataPoints.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r="3"
          fill="#3b82f6"
        />
      ))}

      {data.map((item, index) => {
        const labelPoint = getPoint(index, 118);
        return (
          <text
            key={item.label}
            x={labelPoint.x}
            y={labelPoint.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-500 text-[9px] font-medium"
          >
            {item.label}
          </text>
        );
      })}
    </svg>
  );
};

export default RadarChart;
