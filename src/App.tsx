import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HeroSection } from './components/hero/HeroSection';
import { MenuSection } from './components/menu/MenuSection';
import { Footer } from './components/layout/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction based on language
    const currentLang = i18n.language;
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <MenuSection />
      <Footer />
    </div>
  );
}

export default App;

