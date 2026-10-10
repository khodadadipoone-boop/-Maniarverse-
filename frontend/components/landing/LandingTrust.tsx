import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

type TrustCard = {
  title: string;
  description: string;
};

const intro = {
  eyebrow: "TRUST & SAFETY",
  heading: "A safe space to explore and grow.",
};

const bannerText =
  "We design Maniarverse with children's safety, privacy, and well-being in mind — giving parents confidence while children explore freely.";

const cards: TrustCard[] = [
  {
    title: "Privacy First",
    description:
      "We respect children's privacy and handle data thoughtfully and transparently.",
  },
  {
    title: "Parent in Control",
    description:
      "Parents and caregivers stay connected and in control of the child's experience.",
  },
  {
    title: "Designed with Care",
    description:
      "Safety and accessibility are considered from the beginning, not added later.",
  },
];

function TrustFeatureCard({ title, description }: TrustCard) {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl bg-gray-100 p-6 text-center md:p-8">
      <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
        {description}
      </p>
    </article>
  );
}

const LandingTrust = () => {
  return (
    <section className="w-full px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start text-left">
          <p className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            {intro.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-blue-600 md:text-3xl">
            {intro.heading}
          </h2>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-gray-100 px-6 py-5 md:flex-row md:items-center">
          <p className="max-w-3xl text-base leading-relaxed text-gray-800">
            {bannerText}
          </p>
          <Link
            href="/register"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-blue-700"
          >
            Join us
            <HiArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <TrustFeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingTrust;
