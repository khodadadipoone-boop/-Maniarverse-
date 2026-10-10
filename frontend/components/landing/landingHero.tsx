import Link from "next/link";

const LandingHero = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-6 py-20 text-center md:py-28">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-blue-600 sm:text-4xl md:text-5xl">
          Every moment with your child,
          <br />
          remembered.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
          Minaverse helps parents plan gently, track growth, and keep family
          memories in one calm place — built for everyday life, not more screen
          noise.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700"
          >
            Create account
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-white px-8 py-3 text-base font-medium text-blue-600 transition-colors hover:bg-blue-50"
          >
            Log in
          </Link>
        </div>

        <div
          aria-hidden="true"
          className="mt-16 w-full max-w-4xl rounded-2xl bg-gray-100 shadow-sm aspect-video"
        />
      </div>
    </section>
  );
};

export default LandingHero;
