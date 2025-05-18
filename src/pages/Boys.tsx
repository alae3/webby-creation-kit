
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { useProductStore } from "@/store/productStore";
import { useLanguageStore } from "@/store/languageStore";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const BoysContent = () => {
  const { products } = useProductStore();
  const { t, language } = useLanguageStore();
  const boysProducts = products.filter(product => product.category === "boys");

  return (
    <div className="flex flex-col min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="flex-1">
        <div className="container-custom py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-morocco-navy mb-6">{t('boysCollection')}</h1>
          <p className="text-lg text-morocco-navy/70 mb-8">
            {t('boysDescription')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {boysProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/products">{t('viewAllProducts')}</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const Boys = () => {
  return (
    <ErrorBoundary>
      <BoysContent />
    </ErrorBoundary>
  );
};

export default Boys;
