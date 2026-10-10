const eyebrow = "WHY MANIARVERSE";
const heading = "Every child experiences the world differently";
const body =
  "What feels easy for one child can feel overwhelming for another. Maniarverse is built around that reality — helping families notice patterns, support growth, and meet each child where they are.";
const calloutHeading = "Different ways of experiencing";
const calloutBody =
  "Sight, sound, touch, routine, and connection all shape how a child moves through the day. Small differences in sensory needs and learning styles can change everything about what support looks like at home.";

const LandingFeatures = () => {
  return (
    <section className="w-full px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="flex flex-col items-start text-left">
          <p className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-blue-600 md:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            {body}
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div
            aria-hidden="true"
            className="mt-1 h-full min-h-24 w-1 shrink-0 self-stretch rounded-full bg-blue-600"
          />
          <div className="flex flex-col items-start py-1">
            <h3 className="text-lg font-semibold text-blue-600 md:text-xl">
              {calloutHeading}
            </h3>
            <div className="mt-3 flex items-start gap-3">
              <div
                aria-hidden="true"
                className="mt-1.5 flex shrink-0 flex-col items-center gap-1.5"
              >
                <span className="size-1.5 rounded-full bg-blue-300" />
                <span className="size-1.5 rounded-full bg-blue-300" />
                <span className="size-1.5 rounded-full bg-blue-300" />
              </div>
              <p className="text-base leading-relaxed text-gray-700">
                {calloutBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
