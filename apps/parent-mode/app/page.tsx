import LandingHeader from "@/components/landing/landingHeader";
import LandingHero from "@/components/landing/landingHero";
import LandingFeatures from "@/components/landing/landingFeatures";
import LandingStats from "@/components/landing/landingStats";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-teal-50 to-cyan-50">
      <LandingHeader />
      <LandingHero />
      <LandingFeatures />
      <LandingStats />
    </div>
  );
}
