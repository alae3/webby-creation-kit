
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageContentStore } from "@/store/pageContentStore";
import { useLanguageStore } from "@/store/languageStore";

const ShippingReturns = () => {
  const { pages } = usePageContentStore();
  const { language, t } = useLanguageStore();
  
  return (
    <div className="flex flex-col min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="flex-1">
        <div className="container-custom py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-morocco-navy mb-6">{t('shippingAndReturns')}</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: pages.shipping.content }} />
              
              {/* Additional shipping information */}
              <h2 className="text-2xl font-semibold text-morocco-navy mt-8 mb-4">{t('shippingDetails')}</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>{t('freeShipping')}:</strong> {t('freeShippingThreshold')}</li>
                <li><strong>{t('standardShipping')}:</strong> {t('standardShippingTime')}</li>
                <li><strong>{t('expressShipping')}:</strong> {t('expressShippingTime')}</li>
                <li><strong>{t('internationalShipping')}:</strong> {t('internationalShippingTime')}</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-morocco-navy mt-8 mb-4">{t('returnsPolicy')}</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('returnsAccepted')}</li>
                <li>{t('returnsCondition')}</li>
                <li>{t('returnShipping')}</li>
                <li>{t('refundProcessing')}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShippingReturns;
