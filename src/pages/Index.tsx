
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryFeature from "@/components/CategoryFeature";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useLanguageStore } from "@/store/languageStore";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const Index = () => {
  const { language } = useLanguageStore();
  const [hasError, setHasError] = useState(false);
  
  // Debug log
  useEffect(() => {
    try {
      console.log("Index component rendered with language:", language);
    } catch (error) {
      console.error("Error in Index component useEffect:", error);
      setHasError(true);
    }
  }, [language]);
  
  if (hasError) {
    return <div className="p-8 text-center">An unexpected error occurred in the Index component.</div>;
  }
  
  return (
    <div className="flex flex-col min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      <div className="flex-grow">
        <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong in the Hero section. Please try refreshing.</div>}>
          <Hero />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong in the Categories section. Please try refreshing.</div>}>
          <CategoryFeature />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong in the Products section. Please try refreshing.</div>}>
          <FeaturedProducts />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong in the Testimonials section. Please try refreshing.</div>}>
          <Testimonials />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong in the Promo section. Please try refreshing.</div>}>
          <PromoBanner />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong in the Benefits section. Please try refreshing.</div>}>
          <Benefits />
        </ErrorBoundary>
      </div>
      <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong in the Footer section. Please try refreshing.</div>}>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Index;
