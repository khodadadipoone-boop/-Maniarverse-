import LandingHeader from "@/components/landing/landingHeader";
import LandingHero from "@/components/landing/landingHero";
import LandingFeatures from "@/components/landing/landingFeatures";
import LandingAccess from "@/components/landing/landingAccess";
import LandingServices from "@/components/landing/landingServices";
import LandingInside from "@/components/landing/landingInside";
import LandingTrust from "@/components/landing/LandingTrust";
import LandingFooter from "@/components/landing/landingFooter";


export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-b from-teal-50 to-cyan-50">

      <LandingHeader />
      <LandingHero />
      <LandingFeatures />
      <LandingAccess />
      <LandingServices />
      <LandingInside />
      <LandingTrust />
      <LandingFooter />

    </div>
  )

}
