import Link from "next/link";
import { HiOutlineLockClosed, HiOutlineShieldCheck } from "react-icons/hi2";

const LandingHero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            <HiOutlineShieldCheck className="size-4 shrink-0" />
            A safe space for your family
          </span>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Every moment with your child,{" "}
            <span className="text-blue-600">remembered.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
            Minaverse helps parents plan gently, track growth, and keep family
            memories in one calm place — built for everyday life, not more
            screen noise.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/register"
              className="rounded-xl bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700"
            >
              Create account
            </Link>
            <Link
              href="/login"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              Log in
            </Link>
          </div>

          <p className="mt-5 inline-flex items-center gap-1.5 text-xs text-slate-500">
            <HiOutlineLockClosed className="size-3.5 shrink-0" />
            Safe • Private • Ad-free
          </p>
        </div>

        <div
          aria-hidden="true"
          className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-linear-to-br from-blue-50 via-blue-100 to-blue-50 md:aspect-[4/3] lg:aspect-square"
        >
          <div className="absolute -top-8 -left-8 size-40 rounded-full bg-blue-200/50" />
          <div className="absolute top-1/4 right-8 size-24 rounded-full bg-blue-300/40" />
          <div className="absolute bottom-10 left-1/4 size-32 rounded-full bg-blue-200/35" />
          <div className="absolute right-1/4 bottom-1/4 size-16 rounded-full bg-blue-400/25" />
          <div className="absolute top-1/2 left-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40" />

          <svg
            className="absolute top-10 right-14 size-6 text-blue-400/70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l1.4 6.1L19 9.5l-5 3.2 1.6 6.3L12 15.8 8.4 19l1.6-6.3-5-3.2 5.6-1.4L12 2z" />
          </svg>
          <svg
            className="absolute bottom-16 left-12 size-4 text-blue-500/60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l1.4 6.1L19 9.5l-5 3.2 1.6 6.3L12 15.8 8.4 19l1.6-6.3-5-3.2 5.6-1.4L12 2z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
