

import Banner from "./views/Banner";
import DesktopStepsSection from "./components/StepsSection";
import HumanTech from "./views/HumanTech";
import Testimonials from "./views/Testimonials";
import Partners from "./components/Partners";
import Range from "./components/Range";
import Solutions from "./components/Solutions";
import Differences from "./components/Differences";
import MobileStepsSection from "./components/MobileSection";
import LayoutMobile from "./components/LayoutMobile";

import HeroSection from "./views/HeroSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <Partners />
        <Banner />
        <LayoutMobile />
        <Range />
        <DesktopStepsSection />
        <MobileStepsSection />
        <HumanTech />
        <Solutions />
        <Differences/>
        <Testimonials />
        
    </>
  );
}
