# Implementation Status - Night Wing PH

## ✅ Completed (current build)

- Fonts & typography
  - Self-hosted Josefin Sans (logo/title) and Amatic SC (body/Hebrew).
  - Global body uses Amatic SC, larger and bolder by default; subtitles updated to Amatic SC.
  - "WING" outline fixed with responsive `-webkit-text-stroke`, background-colored fill, `paint-order: stroke fill`.

- Hero section
  - Header removed; standalone language button at top-right (smaller, subtle pulse-glow-light).
  - Hours/day display shows only day + hours (Hebrew/English); subtle glow; adjusted weight/spacings.
  - Floating wings and star field placed behind content (z-index), repositioned to edges; lower opacity/glow.
  - Subtitle/description disabled for now.

- Menu
  - Section title changed to "אני במאנץ' ל...:" with thicker visual weight and rounded pink underline; spacing fixed for mobile/desktop.
  - Category subtitles use Amatic SC; category underline in pink, rounded, thicker; improved spacing.
  - Category order: Combo, Wings, Tenders, Fries (addons), Salads, Sauces, Drinks (Fries above Salads).
  - Menu item cards show images; item titles and hot symbol removed; descriptions centered and resized.

- Selection panel (combos/wings/tenders)
  - Bottom-sheet via React Portal with body scroll lock, high z-index, spring animations, sticky header/footer.
  - Wings/Tenders: select 2 sauces.
  - Combo: select type (Wings/Tenders) + 2 sauces + 1 drink.
  - Drink options restricted to Cola Zero, Fanta, Sprite Zero (removed 1.5L); validation ensures selections.

- Cart
  - Floating cart button (top-left) appears after items added; shows count.
  - Slide-in cart panel with item images, names, quantities; per-item price line removed; total shown.
  - Actions: Clear, Keep Ordering, Remove, Edit.
  - Combo items can be removed; all configurable items (Combo/Wings/Tenders) can be edited in-place (sauces/drink/type).
  - Combo items use combo image.

- Checkout flow
  - Simple order submission to n8n webhook at https://n8n.yarden-zamir.com/webhook/order
  - Checkout form with customer name, phone, order type (pickup/delivery), payment method (cash/paybox)
  - Browser geolocation for delivery addresses (optional)
  - Automatic order time (ISO 8601), success feedback, cart clearing
  - Translated UI for Hebrew/English

- i18n
  - Added/updated keys: day label, hero order text, new menu title, fries, selection panel texts, cart labels, drink names.
  - Fixed Hebrew spelling to "מאנץ'" across UI.

- CSS utilities
  - `.btn-primary`: semi-transparent pink background, pink outline, subtle hover, lighter pulse.
  - `.menu-title-thick` for Amatic SC thickness; `.hours-glow` for subtle glow.

- Build fixes
  - Tailwind circular dependency from `@apply font-body` resolved (direct font-family/weight in CSS).
  - TypeScript: guard `cartItem.comboConfig` in `CartPanel`; remove unused `removeItem` import.

## 🧩 In scope but deferred

- Analytics, SEO, and accessibility polishing.

## 🏃 Run the Project

```bash
npm install
npm run dev
```

Open `http://localhost:5173` (Hebrew is default; use the top-right language button to switch).

