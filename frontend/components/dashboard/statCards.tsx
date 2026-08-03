import {
  HiOutlineFaceSmile,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChartBar,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { IconType } from "react-icons";

interface StatCardProps {
  label: string;
  value: string;
  description: string;
  icon: IconType;
  iconBg: string;
  iconColor: string;
}

const StatCard = ({
  label,
  value,
  description,
  icon: Icon,
  iconBg,
  iconColor,
}: StatCardProps) => {
  return (
    <div className="flex min-w-44 flex-1 items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg}`}
      >
        <Icon size={20} className={iconColor} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="text-xl font-bold text-slate-800">{value}</p>
        <p className="mt-0.5 text-xs text-slate-400">{description}</p>
      </div>
    </div>
  );
};

const StatCards = () => {
  // TODO: replace with real data from API/context
  const stats: Omit<StatCardProps, "icon">[] = [
    {
      label: "Mood Today",
      value: "Happy",
      description: "Feeling great this morning",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      label: "Today's Plan",
      value: "3 of 5",
      description: "Activities completed",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      label: "Weekly Progress",
      value: "78%",
      description: "Goals on track",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      label: "Needs Attention",
      value: "1 item",
      description: "Review pending request",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const icons = [
    HiOutlineFaceSmile,
    HiOutlineClipboardDocumentCheck,
    HiOutlineChartBar,
    HiOutlineExclamationCircle,
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {stats.map((stat, index) => (
        <StatCard key={stat.label} {...stat} icon={icons[index]} />
      ))}
    </div>
  );
};

export default StatCards;
