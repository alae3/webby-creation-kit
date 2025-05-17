
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryFeature from "@/components/CategoryFeature";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useLanguageStore } from "@/store/languageStore";
import { useEffect } from "react";

const Index = () => {
  const { language } = useLanguageStore();
  
  // Debug log
  useEffect(() => {
    console.log("Index component rendered with language:", language);
  }, [language]);
  
  return (
    <div className="flex flex-col min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <CategoryFeature />
        <FeaturedProducts />
        <Testimonials />
        <PromoBanner />
        <Benefits />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
