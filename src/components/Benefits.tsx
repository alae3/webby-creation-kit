
import { Shield, Truck, RefreshCw, Clock } from 'lucide-react';
import { useLanguageStore } from '@/store/languageStore';

const Benefits = () => {
  const { language, t } = useLanguageStore();
  
  const benefits = [{
    icon: <Truck className="h-10 w-10 text-morocco-blue" />,
    title: t('freeShipping'),
    description: t('freeShippingDesc')
  }, {
    icon: <Shield className="h-10 w-10 text-morocco-terracotta" />,
    title: t('superiorQuality'),
    description: t('superiorQualityDesc')
  }, {
    icon: <RefreshCw className="h-10 w-10 text-morocco-green" />,
    title: t('easyReturns'),
    description: t('easyReturnsDesc')
  }, {
    icon: <Clock className="h-10 w-10 text-morocco-yellow" />,
    title: t('customerSupport'),
    description: t('customerSupportDesc')
  }];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-morocco-navy moroccan-border pb-3 inline-block">
            {t('whyChooseUs') || 'Why Choose Us'}
          </h2>
          <p className="mt-6 text-lg text-morocco-navy/70 max-w-2xl mx-auto">
            {t('benefitsSubtitle') || 'We are committed to providing the best experience for you and your little ones'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group bg-white hover:bg-morocco-sand/20"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-morocco-navy">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
