
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguageStore } from '@/store/languageStore';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguageStore();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const getNotFoundText = () => {
    if (language === 'ar') {
      return {
        title: '404',
        message: 'عذراً! الصفحة غير موجودة',
        returnText: 'العودة إلى الصفحة الرئيسية'
      };
    } else if (language === 'fr') {
      return {
        title: '404',
        message: 'Oups! Page non trouvée',
        returnText: 'Retourner à l\'accueil'
      };
    } else {
      return {
        title: '404',
        message: 'Oops! Page not found',
        returnText: 'Return to Home'
      };
    }
  };

  const notFoundText = getNotFoundText();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{notFoundText.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{notFoundText.message}</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          {notFoundText.returnText}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
