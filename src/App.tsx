import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WorkflowSection } from "./components/WorkflowSection";
function App() {
  return (
    <>
      <Navbar />
      <div className="hero-container max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <div className="feature-container max-w-7xl mx-auto pt-20 px-6">
        <FeaturesSection />
      </div>
      <div className="workflow-container max-w-7xl mx-auto pt-20 px-6">
        <WorkflowSection />
      </div>
      <div className="pricing-container max-w-7xl mx-auto pt-20 px-6">
        <PricingSection />
      </div>
      <div className="testimonials-container max-w-7xl mx-auto pt-20 px-6">
        <TestimonialsSection />
      </div>
      <div className="footer-container max-w-7xl mx-auto pt-20 px-6">
        <Footer />
      </div>
    </>
  );
}

export default App;
