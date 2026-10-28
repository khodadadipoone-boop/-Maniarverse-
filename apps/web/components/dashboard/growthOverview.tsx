import { HiOutlineHeart } from "react-icons/hi2";

// Constitution note: this card replaces the former developmental radar chart
// (Speech / Motor / Social / Cognitive / Emotional / Self-care scores).
// Maniarverse never scores, ranks or compares a child (PRD Phase 1,
// Architecture_Review_v1.0, apps/web/OWNER.md). It shows shared moments instead.

const GrowthOverview = () => {
  // TODO: replace with real data from API/context
  const moments = [
    { id: "1", title: "Visited Calm World together", when: "Yesterday" },
    { id: "2", title: "Saved a drawing to the Memory Capsule", when: "2 days ago" },
    { id: "3", title: "First meeting with Maniar", when: "Last week" },
  ];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800">Shared Moments</h2>
        <button
          type="button"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View all
        </button>
      </div>

      {moments.length === 0 ? (
        <p className="flex flex-1 items-center justify-center text-sm text-slate-400">
          Your shared moments will appear here
        </p>
      ) : (
        <ul className="flex flex-1 flex-col gap-3">
          {moments.map((moment) => (
            <li
              key={moment.id}
              className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-100">
                <HiOutlineHeart size={18} className="text-rose-500" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-700">
                  {moment.title}
                </p>
                <p className="text-xs text-slate-400">{moment.when}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GrowthOverview;
