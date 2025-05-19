
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useContentStore } from '@/store/contentStore';
import { useLanguageStore } from '@/store/languageStore';
import { ArrowRight } from 'lucide-react';

const PromoBanner = () => {
  const { images } = useContentStore();
  const { t } = useLanguageStore();

  // Fallback image if the content store image is not available
  const bannerImage = images.bannerImage || "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=1800&q=80";

  return (
    <div className="py-12 my-12 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      ></div>
      
      {/* Overlay with pattern */}
      <div className="absolute inset-0 bg-morocco-navy/70"></div>
      <div className="absolute inset-0 bg-moroccan-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white py-16">
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-morocco-terracotta/20 border border-morocco-terracotta/30 rounded-full text-morocco-terracotta text-sm font-medium mb-4">
            {t('limitedTime') || 'Limited Time Offer'}
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('summerCollection') || 'Summer Collection Sale'}
          </h2>
          
          <div className="h-1 w-16 bg-morocco-terracotta mx-auto my-6"></div>
          
          <p className="text-xl text-white/90 mb-8">
            {t('summerDiscount') || 'Enjoy up to 30% off on our summer collection for your kids.'}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              asChild
              className="bg-morocco-terracotta hover:bg-morocco-terracotta/90 text-white py-6 px-8 text-lg rounded-md flex items-center gap-2 group"
            >
              <Link to="/products">
                {t('shopNow') || 'Shop Now'} 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg"
            >
              <Link to="/new-arrivals">
                {t('viewCollection') || 'View Collection'}
              </Link>
            </Button>
          </div>
          
          {/* Optional countdown timer */}
          <div className="mt-10 flex justify-center">
            <div className="grid grid-cols-4 gap-3 text-white">
              {[
                { value: '10', label: t('days') || 'Days' },
                { value: '08', label: t('hours') || 'Hours' },
                { value: '45', label: t('minutes') || 'Minutes' },
                { value: '30', label: t('seconds') || 'Seconds' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20 mb-1">
                    <span className="text-2xl md:text-3xl font-bold">{item.value}</span>
                  </div>
                  <span className="text-xs text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
