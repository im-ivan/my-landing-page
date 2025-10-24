import { FeatureSection } from "./components/FeatureSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WorkFlowSection } from "./components/WorkflowSection";
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
      <div className="workflow-container max-w-7xl mx-auto pt-20 px-6">
        <WorkFlowSection />
      </div>
      <div className="pricing-container max-w-7xl mx-auto pt-20 px-6">
        <PricingSection />
      </div>
      <div className="testimonials-container max-w-7xl mx-auto pt-20 px-6">
        <TestimonialsSection />
      </div>
    </>
  );
}

export default App;
