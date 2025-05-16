
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'ar' | 'fr';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<Language, Record<string, string>>;
  t: (key: string) => string;
}

// Basic translations for demonstration
const translations = {
  en: {
    home: 'Home',
    girls: 'Girls',
    boys: 'Boys',
    baby: 'Baby',
    ourStores: 'Our Stores',
    adminDashboard: 'Admin Dashboard',
    adminLogin: 'Admin Login',
    searchProducts: 'Search products...',
    search: 'Search',
    addToBag: 'Add to Bag',
    outOfStock: 'Out of Stock',
    english: 'English',
    arabic: 'العربية',
    french: 'Français'
  },
  ar: {
    home: 'الرئيسية',
    girls: 'بنات',
    boys: 'أولاد',
    baby: 'أطفال',
    ourStores: 'متاجرنا',
    adminDashboard: 'لوحة الإدارة',
    adminLogin: 'تسجيل دخول المسؤول',
    searchProducts: 'البحث عن المنتجات...',
    search: 'بحث',
    addToBag: 'أضف إلى الحقيبة',
    outOfStock: 'غير متوفر',
    english: 'English',
    arabic: 'العربية',
    french: 'Français'
  },
  fr: {
    home: 'Accueil',
    girls: 'Filles',
    boys: 'Garçons',
    baby: 'Bébé',
    ourStores: 'Nos Magasins',
    adminDashboard: 'Dashboard Admin',
    adminLogin: 'Connexion Admin',
    searchProducts: 'Rechercher des produits...',
    search: 'Rechercher',
    addToBag: 'Ajouter au Panier',
    outOfStock: 'En Rupture de Stock',
    english: 'English',
    arabic: 'العربية',
    french: 'Français'
  }
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      translations,
      setLanguage: (language: Language) => set({ language }),
      t: (key: string) => {
        const { language, translations } = get();
        return translations[language][key] || key;
      }
    }),
    {
      name: 'language-storage',
    }
  )
);
