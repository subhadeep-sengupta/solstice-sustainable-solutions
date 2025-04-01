import AboutSection from "./AboutSection";
import HeroSection from "./hero";
import ImageTrain from "./ProjectSlider";
import Services from "./Services";
import Whyus from "./Whyus";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Whyus />
      <Services />
      <ImageTrain />
    </div>
  );
}
