
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryFeature from "@/components/CategoryFeature";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useLanguageStore } from "@/store/languageStore";

const Index = () => {
  const { language } = useLanguageStore();
  
  return (
    <div className="flex flex-col min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
