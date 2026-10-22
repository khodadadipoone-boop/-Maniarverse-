import RadarChart from "./radarChart";

const GrowthOverview = () => {
  // TODO: replace with real data from API/context
  const radarData = [
    { label: "Speech", value: 72 },
    { label: "Motor", value: 85 },
    { label: "Social", value: 68 },
    { label: "Cognitive", value: 78 },
    { label: "Emotional", value: 80 },
    { label: "Self-care", value: 65 },
  ];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800">Growth Overview</h2>
        <button
          type="button"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View report
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center py-2">
        <RadarChart data={radarData} />
      </div>
    </div>
  );
};

export default GrowthOverview;
