import { type ReactNode } from "react";
import { HiGlobeAmericas } from "react-icons/hi2";

type AccessCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

const intro = {
  eyebrow: "MEET MANIARVERSE",
  heading: "More than an app. A world to explore",
  body: "Maniarverse opens a calm, curiosity-driven space where children can explore, experience, and grow — at their own pace, in their own way.",
};

const cards: AccessCard[] = [
  {
    title: "Explore",
    description: "Discover new experiences in a world built for curiosity.",
    icon: <HiGlobeAmericas className="size-12 text-blue-600" aria-hidden />,
  },
  {
    title: "Experience",
    description: "Interact, play, and learn through meaningful activities.",
    icon: (
      <span
        aria-hidden
        className="size-12 rounded-full bg-blue-100"
      />
    ),
  },
  {
    title: "Grow",
    description: "Build confidence through practice, repetition, and progress.",
    icon: (
      <span
        aria-hidden
        className="size-12 rounded-full bg-blue-100"
      />
    ),
  },
];

function AccessFeatureCard({ title, description, icon }: AccessCard) {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl bg-gray-100 p-8 text-center">
      <div className="flex size-12 items-center justify-center">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-blue-600">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
        {description}
      </p>
    </article>
  );
}

const LandingAccess = () => {
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
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            {intro.body}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {cards.map((card) => (
            <AccessFeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingAccess;
