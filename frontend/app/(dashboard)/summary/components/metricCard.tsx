import { IconType } from "react-icons";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: IconType;
}

const MetricCard = ({ label, value, icon: Icon }: MetricCardProps) => {
  return (
    <div className="flex min-w-36 flex-1 flex-col gap-2 rounded-2xl border border-teal-100 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center gap-2 text-teal-600">
        <Icon size={18} />
        <span className="text-sm font-medium text-slate-500">{label}</span>
      </div>
      <span className="text-2xl font-bold text-slate-700">{value}</span>
    </div>
  );
};

export default MetricCard;
