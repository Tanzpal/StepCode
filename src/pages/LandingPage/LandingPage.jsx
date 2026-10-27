import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import Navbar from "../../components/Navbar";
import ExploreProblems from "./ExploreProblems";
import Final from "./Final";
import Footer from "../../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ExploreProblems />
      <Final />
      <Footer />
    </>
  );
}
