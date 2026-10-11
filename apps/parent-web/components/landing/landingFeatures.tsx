import Link from "next/link";
import { IconType } from "react-icons";
import {
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi2";

interface FeatureCard {
  icon: IconType;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

// TODO: replace placeholder copy with final text from the team
const features: FeatureCard[] = [
  {
    icon: HiOutlineShieldCheck,
    title: "Safe & Secure",
    description:
      "Your family's data stays private. Built with care so parents can share and store memories without worry.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: HiOutlineSparkles,
    title: "Track Every Milestone",
    description:
      "Record stories, growth moments, and everyday events in one place — so nothing precious gets lost.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Built for Parents",
    description:
      "Stay connected with your child's journey through simple plans, gentle insights, and shared updates.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

const LandingFeatures = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const { icon: Icon, title, description, iconBg, iconColor } = feature;

          return (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}
              >
                <Icon size={22} className={iconColor} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {description}
              </p>

              {/* TODO: link to the real section/page once it exists */}
              <Link
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                Learn more
                <HiArrowRight className="size-4" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default LandingFeatures;
