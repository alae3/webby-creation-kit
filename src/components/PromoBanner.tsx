
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useContentStore } from '@/store/contentStore';
import { useLanguageStore } from '@/store/languageStore';

const PromoBanner = () => {
  const { images } = useContentStore();
  const { t } = useLanguageStore();

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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('summerCollection')}</h2>
        <p className="text-xl mb-8">{t('summerDiscount')}</p>
        <Button asChild className="bg-morocco-terracotta hover:bg-morocco-navy">
          <Link to="/products">{t('shopNow')}</Link>
        </Button>
      </div>
    </div>
  );
};

export default PromoBanner;
