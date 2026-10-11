import { IconType } from "react-icons";
import {
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineTrophy,
  HiOutlineUserGroup,
} from "react-icons/hi2";

interface StatItem {
  icon: IconType;
  number: string;
  label: string;
  caption: string;
  iconBg: string;
  iconColor: string;
}

// TODO: replace placeholder stats with real numbers from the team
const stats: StatItem[] = [
  {
    icon: HiOutlineUserGroup,
    number: "10K+",
    label: "Happy Families",
    caption: "Trust Maniarverse",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: HiOutlineSparkles,
    number: "50K+",
    label: "Moments Recorded",
    caption: "Stories & milestones",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: HiOutlineTrophy,
    number: "4.9/5",
    label: "Parent Rating",
    caption: "Average rating",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: HiOutlineShieldCheck,
    number: "100%",
    label: "Child Safe",
    caption: "Our top priority",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

const LandingStats = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl bg-slate-50 px-6 py-10 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const {
              icon: Icon,
              number,
              label,
              caption,
              iconBg,
              iconColor,
            } = stat;

            return (
              <div key={label} className="flex items-start gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconBg}`}
                >
                  <Icon size={22} className={iconColor} />
                </div>
                <div className="min-w-0">
                  <p className="text-xl font-bold text-slate-900 md:text-2xl">
                    {number}
                  </p>
                  <p className="text-sm font-medium text-slate-700">{label}</p>
                  <p className="text-xs text-slate-500">{caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingStats;
