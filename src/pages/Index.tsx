
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
import { ErrorBoundary } from "@/components/ErrorBoundary";

const Index = () => {
  const { language } = useLanguageStore();
  
  // Debug log
  useEffect(() => {
    console.log("Index component rendered with language:", language);
  }, [language]);
  
  return (
    <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong loading the home page. Please try refreshing the browser.</div>}>
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
    </ErrorBoundary>
  );
};

export default Index;
