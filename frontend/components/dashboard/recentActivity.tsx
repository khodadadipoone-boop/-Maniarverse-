import {
  HiOutlineDocumentText,
  HiOutlineCalendarDays,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { IconType } from "react-icons";

interface ActivityItem {
  title: string;
  timestamp: string;
  icon: IconType;
  iconBg: string;
  iconColor: string;
}

const RecentActivity = () => {
  // TODO: replace with real data from API/context
  const activities: ActivityItem[] = [
    {
      title: "New story recorded: First steps",
      timestamp: "2 hours ago",
      icon: HiOutlineDocumentText,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      title: "Doctor visit scheduled for Aug 3",
      timestamp: "5 hours ago",
      icon: HiOutlineCalendarDays,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Weekly goal milestone reached",
      timestamp: "Yesterday",
      icon: HiOutlineSparkles,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-slate-800">Recent Activity</h2>

      <ul className="flex flex-col gap-4">
        {activities.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.title} className="flex items-start gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
              >
                <Icon size={16} className={item.iconColor} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400">{item.timestamp}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentActivity;
