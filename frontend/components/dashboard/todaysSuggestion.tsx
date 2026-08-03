import { HiOutlineLightBulb } from "react-icons/hi2";

const TodaysSuggestion = () => {
  // TODO: replace with real data from API/context
  return (
    <div className="flex h-full flex-col rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
          <HiOutlineLightBulb size={20} className="text-amber-600" />
        </div>
        <h2 className="text-lg font-bold text-slate-800">Today&apos;s Suggestion</h2>
      </div>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
        Try a 15-minute outdoor play session before lunch. Fresh air and movement
        can help improve focus for afternoon activities.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Add to plan
        </button>
        <button
          type="button"
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          Maybe later
        </button>
      </div>

      <button
        type="button"
        className="mt-4 self-start text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        See more suggestions →
      </button>
    </div>
  );
};

export default TodaysSuggestion;
