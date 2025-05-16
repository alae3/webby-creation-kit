
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useContentStore } from '@/store/contentStore';
import { useLanguageStore } from '@/store/languageStore';

const PromoBanner = () => {
  const { images } = useContentStore();
  const { language } = useLanguageStore();

  // Translations for the banner
  const translations = {
    en: {
      title: 'Summer Collection',
      subtitle: 'Special 20% discount on all new arrivals',
      buttonText: 'Shop Now'
    },
    ar: {
      title: 'مجموعة الصيف',
      subtitle: 'خصم خاص 20٪ على جميع الوصولات الجديدة',
      buttonText: 'تسوق الآن'
    },
    fr: {
      title: 'Collection d\'Été',
      subtitle: 'Réduction spéciale de 20% sur toutes les nouveautés',
      buttonText: 'Acheter Maintenant'
    }
  };

  const text = translations[language as keyof typeof translations];

  return (
    <div 
      className="relative overflow-hidden my-12 py-12" 
      style={{
        backgroundImage: `url(${images.bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container-custom relative z-10 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title}</h2>
        <p className="text-xl mb-8">{text.subtitle}</p>
        <Button asChild className="bg-morocco-terracotta hover:bg-morocco-navy">
          <Link to="/products">{text.buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default PromoBanner;
