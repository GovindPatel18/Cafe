import { MenuItem, MenuCategory } from '../types';

import latteArtImg from '../assets/images/menu_latte_art_macro_1791614032679.jpg';
import strawberryMatchaImg from '../assets/images/menu_strawberry_matcha_1791614045190.jpg';
import croissantImg from '../assets/images/menu_croissant_pastry_1791614057257.jpg';
import avocadoToastImg from '../assets/images/menu_avocado_toast_1791614112676.jpg';

export interface CategoryInfo {
  id: MenuCategory;
  name: string;
  tagline: string;
  photoUrl: string;
  photoTitle: string;
  photoSubtitle: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'coffee',
    name: 'Espresso & Coffee',
    tagline: 'Meticulously dialed-in extractions and small-batch single origins',
    photoUrl: latteArtImg,
    photoTitle: 'Microfoam Craftsmanship',
    photoSubtitle: 'Silky micro-textured organic oat & pasture-raised whole milk poured daily by our lead baristas.',
  },
  {
    id: 'tea',
    name: 'Teas & Matchas',
    tagline: 'Uji stone-ground ceremonial matcha and rare loose-leaf harvests',
    photoUrl: strawberryMatchaImg,
    photoTitle: 'First-Harvest Uji Matcha',
    photoSubtitle: 'Whisked to order with organic seasonal fruit purees and mountain spring water.',
  },
  {
    id: 'bakery',
    name: 'Artisanal Bakery',
    tagline: 'Laminated slow-fermented viennoiserie baked fresh before dawn',
    photoUrl: croissantImg,
    photoTitle: '72-Hour Laminated Dough',
    photoSubtitle: 'Cultured Normandy butter, high-hydration sourdough levain, and crisp golden layers.',
  },
  {
    id: 'bistro',
    name: 'All-Day Bistro',
    tagline: 'Nourishing, elevated plates crafted with local regenerative farms',
    photoUrl: avocadoToastImg,
    photoTitle: 'Farm-Fresh Sourdough Provisions',
    photoSubtitle: 'Heirloom produce, heritage pasture eggs, and cold-pressed California olive oils.',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Espresso & Coffee
  {
    id: 'pour-over',
    category: 'coffee',
    name: 'Single-Origin Pour-over',
    price: 6.75,
    description: 'Manual V60 brew with rotational single origins. Currently featuring Ethiopian Yirgacheffe with bright jasmine florality and candied bergamot finish.',
    notes: 'Brewed to order · 3.5 min brew time',
    origin: 'Gedeo Zone, Yirgacheffe, Ethiopia (2,050m)',
    dietary: ['House Specialty', 'Organic'],
    featured: true,
  },
  {
    id: 'flat-white',
    category: 'coffee',
    name: 'Specialty Flat White',
    price: 5.50,
    description: 'Double ristretto shot extracted over silky, velvet microfoam with delicate sweet milk balance and a tight rosetta finish.',
    notes: 'House Ember Blend · 6oz cup',
    origin: 'Huila, Colombia & Sidama, Ethiopia blend',
    dietary: ['House Specialty'],
    featured: true,
  },
  {
    id: 'latte',
    category: 'coffee',
    name: 'Madagascar Vanilla Latte',
    price: 6.25,
    description: 'Slow-steeped bourbon vanilla bean syrup, double espresso, and steamed milk of your choice. Clean and lightly caramelized.',
    notes: 'Craft syrup made in-house · 12oz / 16oz',
    origin: 'Medellín, Colombia Single Farm',
    dietary: ['Vegetarian'],
  },
  {
    id: 'cortado',
    category: 'coffee',
    name: 'Spanish Cortado',
    price: 4.75,
    description: 'Equal parts dense double espresso and lightly textured steamed milk served in a tempered Gibraltar glass.',
    notes: '1:1 ratio · 4.5oz glass',
    origin: 'Santa Ana, El Salvador (Honey Process)',
    dietary: ['House Specialty'],
  },
  {
    id: 'espresso-tonic',
    category: 'coffee',
    name: 'Yuzu Espresso Tonic',
    price: 6.50,
    description: 'Chilled Japanese yuzu citrus tonic, aromatic rosemary sprig, and floating shot of washed Ethiopian espresso over hand-carved ice.',
    notes: 'Chilled signature drink · Refreshing & bright',
    origin: 'Kochere, Ethiopia',
    dietary: ['Vegan', 'House Specialty'],
  },
  {
    id: 'batch-brew',
    category: 'coffee',
    name: 'Heritage Batch Brew',
    price: 4.25,
    description: 'Daily fresh filter coffee prepared on our precision Fetco brewer with filtered mineral-balanced water.',
    notes: 'Tasting notes: Toffee, dark chocolate, red apple',
    origin: 'Tarrazú, Costa Rica',
    dietary: ['Organic'],
  },

  // Teas & Matchas
  {
    id: 'strawberry-matcha',
    category: 'tea',
    name: 'Iced Strawberry Matcha Latte',
    price: 7.25,
    description: 'Vibrant layers of house-made organic macerated strawberry compote, cold oat milk, and whisked ceremonial grade Uji matcha.',
    notes: 'Shaken & layered · Served cold over ice',
    origin: 'Kyoto Prefecture, Japan',
    dietary: ['Vegan', 'House Specialty'],
    featured: true,
  },
  {
    id: 'ceremonial-matcha',
    category: 'tea',
    name: 'Ceremonial Green Tea',
    price: 6.00,
    description: 'Pure stone-ground first-harvest green tea whisked with 80°C spring water to a dense, jade microfoam. Notes of sweet grass and umami.',
    notes: 'Traditional bamboo chasen whisked',
    origin: 'Uji, Kyoto, Japan',
    dietary: ['Vegan', 'Organic', 'House Specialty'],
    featured: true,
  },
  {
    id: 'london-fog',
    category: 'tea',
    name: 'Bergamot & Lavender London Fog',
    price: 6.25,
    description: 'Full-bodied organic Earl Grey black tea infused with dried French lavender buds, raw vanilla syrup, and steamed oat milk.',
    notes: 'Floral, soothing, and subtly sweet',
    origin: 'Rishi Organic, Yunnan & Calabria Bergamot',
    dietary: ['Vegetarian'],
  },
  {
    id: 'genmaicha',
    category: 'tea',
    name: 'Toasted Genmaicha Pot',
    price: 5.50,
    description: 'Japanese green tea leaves blended with toasted brown rice kernels. Nutty, warming, and comforting savory undertones.',
    notes: 'Steeped in clay teapot · Multi-infusion',
    origin: 'Shizuoka, Japan',
    dietary: ['Vegan', 'Organic'],
  },

  // Artisanal Bakery
  {
    id: 'butter-croissant',
    category: 'bakery',
    name: 'Butter Croissants',
    price: 4.85,
    description: 'Layered with Isigny Sainte-Mère AOP French butter. Golden, impossibly flaky crust with an airy honeycomb interior.',
    notes: 'Baked fresh at 6:00 AM daily',
    dietary: ['Vegetarian', 'House Specialty'],
    featured: true,
  },
  {
    id: 'vegan-cinnamon-roll',
    category: 'bakery',
    name: 'Vegan Cinnamon Rolls',
    price: 5.75,
    description: 'Pillow-soft brioche dough swirled with organic Korintje cinnamon, muscovado brown sugar, and cashew vanilla bean glaze.',
    notes: '100% plant-based · Served warm',
    dietary: ['Vegan'],
    featured: true,
  },
  {
    id: 'sourdough-toast',
    category: 'bakery',
    name: 'Country Sourdough Toast & Butter',
    price: 5.25,
    description: 'Two thick slices of slow-fermented organic country loaf with whipped sea-salt butter and house seasonal blackberry-thyme jam.',
    notes: 'Naturally leavened 36-hour sourdough',
    dietary: ['Vegetarian'],
  },
  {
    id: 'cardamom-bun',
    category: 'bakery',
    name: 'Swedish Cardamom Morning Bun',
    price: 5.50,
    description: 'Knotted buttery sweet dough infused with freshly crushed green cardamom pods and topped with crunchy pearl sugar crystals.',
    notes: 'Aromatic third-wave classic',
    dietary: ['Vegetarian', 'House Specialty'],
  },

  // All-Day Bistro
  {
    id: 'avocado-toast',
    category: 'bistro',
    name: 'Heirloom Avocado Toast with Poached Egg',
    price: 14.50,
    description: 'Seeded sourdough toast, crushed Hass avocado, 63°C pasture-raised poached egg, pickled shallots, Aleppo chili flakes, and micro cilantro.',
    notes: 'Organic California avocados & local eggs',
    dietary: ['Vegetarian', 'House Specialty'],
    featured: true,
  },
  {
    id: 'truffle-grilled-cheese',
    category: 'bistro',
    name: 'Truffle Grilled Cheese',
    price: 15.00,
    description: 'Aged Vermont white cheddar, French Gruyère, black truffle paste, and caramelized shallots on griddled rustic sourdough.',
    notes: 'Served with cornichons and house tomato jam',
    dietary: ['Vegetarian'],
    featured: true,
  },
  {
    id: 'acai-bowl',
    category: 'bistro',
    name: 'Amazonian Acai Bowl',
    price: 13.50,
    description: 'Organic pure acai puree blended with wild blueberries and banana. Topped with house almond granola, bee pollen, raw honey, and fresh kiwi.',
    notes: 'Naturally sweetened · Gluten-free granola',
    dietary: ['Vegetarian', 'GF', 'Organic'],
    featured: true,
  },
  {
    id: 'wild-mushroom-tartine',
    category: 'bistro',
    name: 'Roasted Wild Mushroom Tartine',
    price: 15.50,
    description: 'Chanterelle and oyster mushrooms sautéed with garlic thyme butter over whipped garlic ricotta on toasted levain with balsamic drizzle.',
    notes: 'Foraged seasonal mushrooms',
    dietary: ['Vegetarian'],
  },
];
