// import logo from './logo.svg';
import "./App.css";
import Footer from "./Template9/components/Footer";
import "./Template9/components/globalSectionStyle.css";
import Header from "./Template9/components/Header";
import SpeakSection from "./Template9/components/SpeakSection";
import PotentialSection from "./Template9/components/PotentialSection";
import BeginSection from "./Template9/components/BeginSection";
import LearnSection from "./Template9/components/sections/LearnSection";
import WhoSection from "./Template9/components/WhoSection";
import MeetSection from "./Template9/components/MeetSection";
import FeaturedSection from "./Template9/components/FeaturedSection";
import BonusSection from "./Template9/components/BonusSection";
import TestimonialSection from "./Template9/components/TestimonialSection";
import TestimonialSection2 from "./Template9/components/TestimonialSection2";
import FaqSection from "./Template9/components/sections/FAQsSection";
import LimitedSection from "./Template9/components/LimitedSection";
// import { motion, useScroll } from "framer-motion";
// import Lottie from 'react-lottie';
// import animationData from './Lottie-Lego.json';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function App() {
  // const { scrollYProgress } = useScroll();
  // const lottieOptions = {
  //   loop: true, // Set to true if you want the animation to loop
  //   autoplay: true, // Set to true if you want the animation to start playing as soon as it's loaded
  //   animationData: animationData, // The animation data
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };
  return (
    <div className="App">
      {/* {console.log(scrollYProgress)}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      /> */}

      <Header />

      <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
        <SpeakSection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInLeft">
        <PotentialSection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
        <BeginSection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
        <LearnSection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
        <WhoSection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
        <MeetSection />
      </ScrollAnimation>

      <FeaturedSection />
      <BonusSection />
      <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
        <TestimonialSection />
        <TestimonialSection2 />
      </ScrollAnimation>

      <FaqSection />
      <LimitedSection />
      <Footer />
    </div>
  );
}

export default App;
