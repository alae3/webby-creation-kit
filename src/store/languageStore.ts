
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'ar' | 'fr';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<Language, Record<string, string>>;
  t: (key: string) => string;
}

// Expanded translations for the entire site
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
    french: 'Français',
    summerCollection: 'Summer Collection',
    summerDiscount: 'Special 20% discount on all new arrivals',
    shopNow: 'Shop Now',
    girlsCollection: 'Girls Collection',
    girlsDescription: 'Explore our beautiful selection of girls\' clothing, featuring traditional Moroccan patterns and modern designs.',
    boysCollection: 'Boys Collection',
    boysDescription: 'Discover our stylish and comfortable boys\' clothing, made with high-quality fabrics and authentic designs.',
    babyCollection: 'Baby Collection',
    babyDescription: 'Gentle fabrics and adorable designs for your little ones, perfect for comfort and style.',
    viewAllProducts: 'View All Products',
    stockQuantity: 'Stock Quantity',
    inStock: 'In Stock',
    onlyFewLeft: 'Only {count} left',
    testimonialManagement: 'Testimonial Management',
    addNewTestimonial: 'Add New Testimonial',
    image: 'Image',
    name: 'Name',
    location: 'Location',
    rating: 'Rating',
    text: 'Text',
    actions: 'Actions'
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
    french: 'Français',
    summerCollection: 'مجموعة الصيف',
    summerDiscount: 'خصم خاص 20٪ على جميع الوصولات الجديدة',
    shopNow: 'تسوق الآن',
    girlsCollection: 'مجموعة البنات',
    girlsDescription: 'استكشفي مجموعتنا الجميلة من ملابس البنات، التي تتميز بأنماط مغربية تقليدية وتصاميم عصرية',
    boysCollection: 'مجموعة الأولاد',
    boysDescription: 'اكتشف ملابس الأولاد الأنيقة والمريحة لدينا، المصنوعة من أقمشة عالية الجودة وتصاميم أصيلة',
    babyCollection: 'مجموعة الأطفال',
    babyDescription: 'أقمشة لطيفة وتصاميم جذابة لصغارك، مثالية للراحة والأناقة',
    viewAllProducts: 'عرض جميع المنتجات',
    stockQuantity: 'كمية المخزون',
    inStock: 'متوفر',
    onlyFewLeft: 'بقي {count} فقط',
    testimonialManagement: 'إدارة الشهادات',
    addNewTestimonial: 'إضافة شهادة جديدة',
    image: 'صورة',
    name: 'الاسم',
    location: 'الموقع',
    rating: 'التقييم',
    text: 'النص',
    actions: 'إجراءات'
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
    french: 'Français',
    summerCollection: 'Collection d\'Été',
    summerDiscount: 'Réduction spéciale de 20% sur toutes les nouveautés',
    shopNow: 'Acheter Maintenant',
    girlsCollection: 'Collection Filles',
    girlsDescription: 'Explorez notre belle sélection de vêtements pour filles, avec des motifs marocains traditionnels et des designs modernes',
    boysCollection: 'Collection Garçons',
    boysDescription: 'Découvrez nos vêtements pour garçons élégants et confortables, fabriqués avec des tissus de haute qualité et des designs authentiques',
    babyCollection: 'Collection Bébé',
    babyDescription: 'Des tissus doux et des designs adorables pour vos petits, parfaits pour le confort et le style',
    viewAllProducts: 'Voir Tous les Produits',
    stockQuantity: 'Quantité en Stock',
    inStock: 'En Stock',
    onlyFewLeft: 'Seulement {count} restants',
    testimonialManagement: 'Gestion des Témoignages',
    addNewTestimonial: 'Ajouter un Nouveau Témoignage',
    image: 'Image',
    name: 'Nom',
    location: 'Emplacement',
    rating: 'Évaluation',
    text: 'Texte',
    actions: 'Actions'
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
