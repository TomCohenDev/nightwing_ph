import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plus, Flame } from 'lucide-react';
import { MenuItem } from '../../types/menu';
import { useCartStore } from '../../stores/useCartStore';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { i18n } = useTranslation();
  const addItem = useCartStore(state => state.addItem);
  const isRTL = i18n.language === 'he';

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: isRTL ? item.nameHe : item.nameEn,
      price: item.price,
      imageUrl: item.imageUrl,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-bg-dark rounded-xl overflow-hidden border border-accent-pink/20 hover:border-accent-pink/40 transition-all duration-300"
    >
      {/* Image Placeholder */}
      {item.imageUrl && (
        <div className="w-full h-48 bg-bg-light flex items-center justify-center">
          <span className="text-text-primary/40">Image</span>
        </div>
      )}

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Name & Spice */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary flex-1">
            {isRTL ? item.nameHe : item.nameEn}
          </h3>
          {item.spiceLevel && item.spiceLevel > 0 && (
            <Flame className="w-5 h-5 text-red-500 flex-shrink-0" />
          )}
        </div>

        {/* Description */}
        <p className="text-text-primary/70 text-sm md:text-base mb-4">
          {isRTL ? item.descriptionHe : item.descriptionEn}
        </p>

        {/* Price & Add Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl md:text-3xl font-bold text-accent-pink">
            ₪{item.price}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="bg-accent-pink text-white p-2 md:p-3 rounded-lg hover:bg-accent-pink/90 transition-colors"
            aria-label="Add to cart"
          >
            <Plus className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

