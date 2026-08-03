import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineBookOpen,
  HiOutlineMusicalNote,
  HiOutlinePaintBrush,
} from "react-icons/hi2";
import { IconType } from "react-icons";

type PlanStatus = "done" | "pending" | "upcoming";

interface PlanItem {
  title: string;
  subtitle: string;
  status: PlanStatus;
  icon: IconType;
}

const StatusIndicator = ({ status }: { status: PlanStatus }) => {
  if (status === "done") {
    return <HiOutlineCheckCircle size={22} className="text-emerald-500" />;
  }
  if (status === "pending") {
    return <HiOutlineClock size={22} className="text-amber-500" />;
  }
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-300" />
  );
};

const TodaysPlan = () => {
  // TODO: replace with real data from API/context
  const planItems: PlanItem[] = [
    {
      title: "Morning reading",
      subtitle: "15 min · Completed",
      status: "done",
      icon: HiOutlineBookOpen,
    },
    {
      title: "Speech therapy",
      subtitle: "10:30 AM · In progress",
      status: "pending",
      icon: HiOutlineMusicalNote,
    },
    {
      title: "Art activity",
      subtitle: "2:00 PM · Upcoming",
      status: "upcoming",
      icon: HiOutlinePaintBrush,
    },
  ];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800">Today&apos;s Plan</h2>
        <button
          type="button"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View all
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        {planItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.title} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
                <Icon size={18} className="text-slate-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-800">{item.title}</p>
                <p className="text-xs text-slate-500">{item.subtitle}</p>
              </div>
              <StatusIndicator status={item.status} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodaysPlan;
