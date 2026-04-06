import HeroAbout from "@/components/about/HeroAbout";
import MissionPurpose from "@/components/about/MissionPurpose";
import PrinciplesValues from "@/components/about/PrinciplesValues";
import TeamSection from "@/components/about/TeamSection";
import AdvisoryBoard from "@/components/about/AdvisoryBoard";
import Partners from "@/components/about/Partners";
import Transparency from "@/components/about/Transparency";
import News from "@/components/about/News";

export const metadata = {
  title: 'About Us | The Climate Intelligence Network',
  description: 'Learn about the Climate Intelligence Network, our mission, values, and team.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 py-12 pb-24">
      <HeroAbout />
      <MissionPurpose />
      <PrinciplesValues />
      <TeamSection />
      <AdvisoryBoard />
      <Partners />
      <Transparency />
      <News />
    </div>
  );
}
