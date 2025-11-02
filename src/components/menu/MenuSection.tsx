import { useTranslation } from 'react-i18next';
import { menuItems } from '../../types/menu';
import { MenuItemCard } from './MenuItemCard';

export const MenuSection = () => {
  const { t } = useTranslation();

  // Group items by category
  const categories = [
    { key: 'wings' as const, items: menuItems.filter(item => item.category === 'wings') },
    { key: 'tenders' as const, items: menuItems.filter(item => item.category === 'tenders') },
    { key: 'sauces' as const, items: menuItems.filter(item => item.category === 'sauces') },
    { key: 'salads' as const, items: menuItems.filter(item => item.category === 'salads') },
    { key: 'drinks' as const, items: menuItems.filter(item => item.category === 'drinks') },
    { key: 'addons' as const, items: menuItems.filter(item => item.category === 'addons') },
    { key: 'combo' as const, items: menuItems.filter(item => item.category === 'combo') },
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-bg-primary scroll-mt-[70px]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="section-title text-center mb-12 md:mb-16">
          {t('menu.title')}
        </h2>

        {/* Menu Categories */}
        <div className="space-y-16 md:space-y-20">
          {categories.map((category) => {
            if (category.items.length === 0) return null;

            return (
              <div key={category.key} className="space-y-6">
                {/* Category Title */}
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-accent-pink mb-6 pb-2 border-b border-accent-pink/30">
                  {t(`menu.${category.key}`)}
                </h3>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {category.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

