type InsideSlide = {
  label: string;
  summary: string;
  title: string;
  description: string;
};

const intro = {
  eyebrow: "INSIDE MANIARVERSE",
  heading: "A world made for curious minds.",
  body: "Explore an experience designed to make every interaction feel meaningful, engaging, and personal.",
};

const slides: InsideSlide[] = [
  {
    label: "Children",
    summary:
      "Explore worlds, interact with activities, and create a personal journey.",
    title: "Explore a world of possibilities",
    description:
      "Discover different worlds filled with playful activities, learning experiences, and games all designed to make every moment fun, engaging, and meaningful.",
  },
  {
    label: "Parents",
    summary: "Follow along and support each step of the journey.",
    title: "Stay close to every moment",
    description:
      "See how your child explores, practices, and grows — with gentle insight into what engages them most.",
  },
  {
    label: "Journey",
    summary: "Watch confidence build through play and repetition.",
    title: "Growth that feels natural",
    description:
      "Every interaction becomes part of a longer path — one that adapts as curiosity and skill evolve over time.",
  },
];

const LandingInside = () => {
  const activeIndex = 0;
  const activeSlide = slides[activeIndex];

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

        <div className="mt-10 rounded-3xl bg-gray-100 p-8 shadow-sm md:p-10">
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="size-8 shrink-0 rounded-lg bg-gray-300"
                />
                <span className="text-sm font-semibold text-blue-600">
                  {activeSlide.label}
                </span>
              </div>

              <p className="mt-4 text-base font-medium text-gray-900 md:text-lg">
                {activeSlide.summary}
              </p>

              <h3 className="mt-6 text-base font-semibold text-gray-900 md:text-lg">
                {activeSlide.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                {activeSlide.description}
              </p>
            </div>

            <div
              aria-hidden
              className="min-h-[250px] w-full rounded-2xl bg-white md:h-full"
            />
          </div>
        </div>

        <div
          className="mt-6 flex items-center justify-center gap-2"
          aria-hidden
        >
          {slides.map((_, index) => (
            <span
              key={index}
              className={
                index === activeIndex
                  ? "h-2 w-6 rounded-full bg-blue-600"
                  : "size-2 rounded-full bg-gray-300"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingInside;
