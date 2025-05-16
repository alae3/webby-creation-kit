
import { Shield, Truck, RefreshCw, Clock } from 'lucide-react';
import { useLanguageStore } from '@/store/languageStore';

const Benefits = () => {
  const { language, t } = useLanguageStore();
  
  const benefits = [{
    icon: <Truck className="h-8 w-8 text-morocco-blue" />,
    title: t('freeShipping'),
    description: t('freeShippingDesc')
  }, {
    icon: <Shield className="h-8 w-8 text-morocco-terracotta" />,
    title: t('superiorQuality'),
    description: t('superiorQualityDesc')
  }, {
    icon: <RefreshCw className="h-8 w-8 text-morocco-green" />,
    title: t('easyReturns'),
    description: t('easyReturnsDesc')
  }, {
    icon: <Clock className="h-8 w-8 text-morocco-yellow" />,
    title: t('customerSupport'),
    description: t('customerSupportDesc')
  }];

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
