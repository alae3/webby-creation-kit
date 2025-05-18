
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageContentStore } from "@/store/pageContentStore";
import { useLanguageStore } from "@/store/languageStore";
import { useContentStore } from "@/store/contentStore";
import { useEffect } from "react";
import { Truck } from "lucide-react";

const ShippingReturns = () => {
  const { pages } = usePageContentStore();
  const { language, t } = useLanguageStore();
  const { lastUpdated, refreshContent } = useContentStore();
  
  // Effect to refresh content when component mounts
  useEffect(() => {
    refreshContent();
    console.log("Shipping page - content refreshed at:", new Date(lastUpdated).toISOString());
  }, [refreshContent, lastUpdated]);
  
  return (
    <div className="flex flex-col min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar key={`nav-${lastUpdated}`} />
      
      <main className="flex-1">
        <div className="container-custom py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-morocco-navy mb-6">{t('shippingAndReturns')}</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: pages.shipping.content }} />
            </div>
          </div>
          
          {/* Shipping Options Table */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-6 w-6 text-morocco-navy" />
              <h2 className="text-2xl font-semibold text-morocco-navy">{t('shippingDetails')}</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border">{t('shippingMethod')}</th>
                    <th className="py-3 px-4 text-left border">{t('estimatedDelivery')}</th>
                    <th className="py-3 px-4 text-left border">{t('cost')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border">{t('standardShipping')}</td>
                    <td className="py-3 px-4 border">{t('standardShippingTime')}</td>
                    <td className="py-3 px-4 border">30 MAD</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border">{t('expressShipping')}</td>
                    <td className="py-3 px-4 border">{t('expressShippingTime')}</td>
                    <td className="py-3 px-4 border">60 MAD</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border">{t('freeShipping')}</td>
                    <td className="py-3 px-4 border">5-7 {t('businessDays')}</td>
                    <td className="py-3 px-4 border">{t('free')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
              
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-morocco-navy mb-4">{t('returnsPolicy')}</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>{t('returnsAccepted')}</li>
              <li>{t('returnsCondition')}</li>
              <li>{t('returnShipping')}</li>
              <li>{t('refundProcessing')}</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer key={`footer-${lastUpdated}`} />
    </div>
  );
};

export default ShippingReturns;
