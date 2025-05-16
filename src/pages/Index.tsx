
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryFeature from "@/components/CategoryFeature";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <CategoryFeature />
      <FeaturedProducts />
      <Testimonials />
      <PromoBanner />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
