type ServiceStep = {
  title: string;
  description: string;
};

const intro = {
  eyebrow: "HOW IT WORKS",
  heading: "A journey that grows with the child.",
  body: "Maniarverse turns everyday interaction into opportunities for exploration and growth.",
};

const steps: ServiceStep[] = [
  {
    title: "Observe",
    description:
      "Understand the child's needs, preferences, and ways of interacting.",
  },
  {
    title: "Experience",
    description:
      "Introduce meaningful activities through a playful environment.",
  },
  {
    title: "Practice",
    description:
      "Give children opportunities to explore, repeat, and build confidence.",
  },
  {
    title: "Grow",
    description:
      "Track the journey and discover how the child's experience evolves over time.",
  },
];

function ServiceStepCard({ title, description }: ServiceStep) {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl bg-gray-100 p-6 text-center md:p-8">
      <h3 className="text-lg font-bold text-gray-900 md:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
        {description}
      </p>
    </article>
  );
}

const LandingServices = () => {
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
          <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
            {intro.body}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <ServiceStepCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
