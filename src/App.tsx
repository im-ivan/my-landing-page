import { FeatureSection } from "./components/FeatureSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="hero-container max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <div className="feature-container max-w-7xl mx-auto pt-20 px-6">
        <FeatureSection />
      </div>
    </>
  );
}

export default App;
