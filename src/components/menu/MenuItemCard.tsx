import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Plus, Check } from "lucide-react";
import { MenuItem } from "../../types/menu";
import { useCartStore } from "../../stores/useCartStore";
import { ItemSelectionPanel } from "./ItemSelectionPanel";

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { i18n, t } = useTranslation();
  const addItem = useCartStore((state) => state.addItem);
  const isRTL = i18n.language === "he";
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showAddedFeedback, setShowAddedFeedback] = useState(false);

  // Check if item needs customization (wings, tenders, combo)
  const needsCustomization =
    item.category === "wings" ||
    item.category === "tenders" ||
    item.category === "combo";

  const handleAddToCart = () => {
    if (needsCustomization) {
      // Open selection panel
      setIsPanelOpen(true);
    } else {
      // Add directly to cart
      addItem({
        id: item.id,
        name: isRTL ? item.nameHe : item.nameEn,
        price: item.price,
        imageUrl: item.imageUrl,
      });
      
      // Show feedback
      setShowAddedFeedback(true);
      setTimeout(() => setShowAddedFeedback(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-bg-dark rounded-xl overflow-hidden border border-accent-pink/20 hover:border-accent-pink/40 transition-all duration-300"
    >
      {/* Image */}
      {item.imageUrl && (
        <div className="w-full h-48 bg-bg-light overflow-hidden">
          <img
            src={item.imageUrl}
            alt={isRTL ? item.nameHe : item.nameEn}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Description */}
        <p className="text-text-primary/70 text-lg md:text-xl font-body font-bold mb-4">
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
            className={`p-2 md:p-3 rounded-lg transition-all duration-300 ${
              showAddedFeedback
                ? "bg-green-500 text-white"
                : "bg-accent-pink text-white hover:bg-accent-pink/90"
            }`}
            aria-label="Add to cart"
          >
            <AnimatePresence mode="wait">
              {showAddedFeedback ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* Added Feedback Overlay */}
        <AnimatePresence>
          {showAddedFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 text-center"
            >
              <span className="text-green-400 font-body font-bold text-sm md:text-base">
                ✓ {t('cart.addedToCart')}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selection Panel */}
      <ItemSelectionPanel
        item={item}
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </motion.div>
  );
};
