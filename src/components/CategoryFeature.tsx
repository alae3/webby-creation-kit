
import { Link } from 'react-router-dom';
import { useLanguageStore } from '@/store/languageStore';
import { useState } from 'react';

const CategoryFeature = () => {
  const { t, language } = useLanguageStore();
  
  // Fallback images for when main images fail to load
  const fallbackImages = {
    girls: "https://placehold.co/800x600/e9d8c4/333333?text=Girls+Collection",
    boys: "https://placehold.co/800x600/c4d8e9/333333?text=Boys+Collection",
    baby: "https://placehold.co/800x600/d8e9c4/333333?text=Baby+Collection"
  };

  // Image state to handle failed loads
  const [images, setImages] = useState({
    girls: "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=800&q=80",
    boys: "https://images.unsplash.com/photo-1611256243212-48a16a558a4c?auto=format&fit=crop&w=800&q=80",
    baby: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=80"
  });

  // Handle image error by replacing with fallback
  const handleImageError = (category: 'girls' | 'boys' | 'baby') => {
    setImages(prev => ({
      ...prev,
      [category]: fallbackImages[category]
    }));
    console.log(`Replaced failed ${category} image with fallback`);
  };
  
  // Create categories after translation is loaded to ensure they use the right text
  const categories = [
    {
      id: 1,
      title: t('girlsCollection'),
      image: images.girls,
      link: "/girls",
      category: 'girls' as const
    },
    {
      id: 2,
      title: t('boysCollection'),
      image: images.boys,
      link: "/boys",
      category: 'boys' as const
    },
    {
      id: 3,
      title: t('babyCollection'),
      image: images.baby,
      link: "/baby",
      category: 'baby' as const
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container-custom">
        <h2 className="section-title text-center mb-4">{t('exploreCollections')}</h2>
        <p className="section-subtitle text-center mb-12">{t('discoverLatestAdditions')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              to={category.link} 
              key={category.id}
              className="group overflow-hidden relative rounded-lg moroccan-shadow hover-scale transition-all duration-300 aspect-[5/6]"
            >
              <div className="absolute inset-0 bg-moroccan-pattern opacity-10 mix-blend-overlay z-10"></div>
              <img 
                src={category.image} 
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => handleImageError(category.category)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-morocco-navy/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{category.title}</h3>
                  <span className="inline-flex items-center font-medium">
                    {t('shopNow')}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFeature;
