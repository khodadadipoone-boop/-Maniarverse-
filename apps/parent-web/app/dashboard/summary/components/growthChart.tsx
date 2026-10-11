interface GrowthPoint {
  label: string;
  height: number;
  weight: number;
}

interface GrowthChartProps {
  data: GrowthPoint[];
}

const CHART_WIDTH = 600;
const CHART_HEIGHT = 160;
const CHART_PADDING = 20;

const buildPoints = (values: number[], max: number) =>
  values
    .map((value, index) => {
      const x =
        CHART_PADDING +
        (index * (CHART_WIDTH - CHART_PADDING * 2)) / (values.length - 1 || 1);
      const y =
        CHART_HEIGHT -
        CHART_PADDING -
        (value / max) * (CHART_HEIGHT - CHART_PADDING * 2);
      return `${x},${y}`;
    })
    .join(" ");

const GrowthChart = ({ data }: GrowthChartProps) => {
  if (!data.length) {
    return (
      <div className="rounded-2xl border border-teal-100 bg-white px-6 py-5 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-slate-700">Growth trend</h3>
        <p className="text-sm text-slate-400">No data available yet</p>
      </div>
    );
  }

  const maxHeight = Math.max(...data.map((point) => point.height));
  const maxWeight = Math.max(...data.map((point) => point.weight));

  const heightPoints = buildPoints(
    data.map((point) => point.height),
    maxHeight
  );
  const weightPoints = buildPoints(
    data.map((point) => point.weight),
    maxWeight
  );

  return (
    <div className="rounded-2xl border border-teal-100 bg-white px-6 py-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-slate-700">Growth trend</h3>

      <svg
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        className="h-40 w-full"
      >
        <polyline
          points={heightPoints}
          fill="none"
          stroke="#0f766e"
          strokeWidth={2.5}
        />
        <polyline
          points={weightPoints}
          fill="none"
          stroke="#5eead4"
          strokeWidth={2.5}
        />
      </svg>

      <div className="mt-3 flex gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-teal-700" />
          Height
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-teal-300" />
          Weight
        </span>
      </div>
    </div>
  );
};

export default GrowthChart;
