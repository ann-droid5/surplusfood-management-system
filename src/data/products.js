import chocolateCroissantImg from '../assets/chocolate-croissant.jpg';
import freshCreamCakeImg from '../assets/fresh-cream-cake.jpg';
import breadBundleImg from '../assets/bread-bundle.jpg';
import hyderabadiBiryaniImg from '../assets/hyderabadi-biryani.jpg';
import riceMealComboImg from '../assets/rice-meal-combo.jpg';
import gourmetBurgerImg from '../assets/gourmet-burger.jpg';
import margheritaPizzaImg from '../assets/margherita-pizza.jpg';
import blueberryMuffinsImg from '../assets/blueberry-muffins.jpg';
import assortedSweetsImg from '../assets/assorted-sweets.jpg';

export const FOOD_CATEGORIES = [
  'All',
  'Bakery',
  'Restaurant',
  'Fast Food',
  'Café',
  'Sweets',
];

export const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: 'Chocolate Croissant (Pack of 2)',
    category: 'Bakery',
    vendorName: 'Golden Hearth Bakery',
    vendorType: 'Bakery',
    vendorLocation: 'MG Road, Sector 4',
    vendorBio:
      'Neighborhood artisan bakery specializing in French-style laminated pastries and daily small-batch bakes.',
    originalPrice: 240,
    discountedPrice: 120,
    discountPercentage: 50,
    availableQuantity: '4 packs left',
    pickupWindow: '6:30 PM – 8:30 PM',
    image: chocolateCroissantImg,
    description:
      'Flaky, butter-layered croissants filled with rich dark chocolate and lightly dusted with cocoa.',
  },
  {
    id: 2,
    name: 'Fresh Cream Cake (500g)',
    category: 'Bakery',
    vendorName: 'Velvet Oven Bakery',
    vendorType: 'Bakery',
    vendorLocation: 'Parkview Avenue',
    vendorBio:
      'Family-run bakery & patisserie offering fresh whipped-cream cakes crafted daily with seasonal fruit.',
    originalPrice: 520,
    discountedPrice: 260,
    discountPercentage: 50,
    availableQuantity: '3 cakes left',
    pickupWindow: '7:00 PM – 9:00 PM',
    image: freshCreamCakeImg,
    description:
      'Light vanilla sponge layered with fresh dairy whipped cream and glazed strawberries.',
  },
  {
    id: 3,
    name: 'Artisan Bread Bundle',
    category: 'Bakery',
    vendorName: 'Crust & Crumb Bakes',
    vendorType: 'Bakery',
    vendorLocation: 'Market Square',
    vendorBio:
      'Stone-deck bakery producing slow-fermented sourdough, multigrain loaves, and French baguettes.',
    originalPrice: 280,
    discountedPrice: 130,
    discountPercentage: 54,
    availableQuantity: '5 bundles left',
    pickupWindow: '6:00 PM – 8:00 PM',
    image: breadBundleImg,
    description:
      'Assorted daily surplus bundle containing sourdough boule, seeded multigrain loaf, and crisp baguettes.',
  },
  {
    id: 4,
    name: 'Royal Saffron Dum Biryani',
    category: 'Restaurant',
    vendorName: 'Spice Route Kitchen',
    vendorType: 'Restaurant',
    vendorLocation: 'Residency Road',
    vendorBio:
      'Full-service heritage dining restaurant known for slow-cooked biryanis and regional curries.',
    originalPrice: 340,
    discountedPrice: 170,
    discountPercentage: 50,
    availableQuantity: '6 portions left',
    pickupWindow: '9:00 PM – 10:30 PM',
    image: hyderabadiBiryaniImg,
    description:
      'Fragrant basmati rice slow-cooked with saffron, caramelized onions, mint, and signature spices.',
  },
  {
    id: 5,
    name: 'Homestyle Paneer & Rice Meal',
    category: 'Restaurant',
    vendorName: 'Grand Courtyard Hotel',
    vendorType: 'Hotel & Restaurant',
    vendorLocation: 'Station Circle',
    vendorBio:
      'Hospitality dining kitchen serving freshly prepared executive lunch and dinner meal boxes.',
    originalPrice: 300,
    discountedPrice: 150,
    discountPercentage: 50,
    availableQuantity: '7 boxes left',
    pickupWindow: '3:00 PM – 4:30 PM',
    image: riceMealComboImg,
    description:
      'Balanced eco-packed meal with steamed jeera rice, rich paneer gravy, sautéed vegetables, and flatbread.',
  },
  {
    id: 6,
    name: 'Gourmet Bistro Burger & Fries',
    category: 'Fast Food',
    vendorName: 'Urban Grill Express',
    vendorType: 'Fast-Food Outlet',
    vendorLocation: 'City Center Plaza',
    vendorBio:
      'Quick-service kitchen serving toasted brioche burgers, wraps, and hand-cut seasoned fries.',
    originalPrice: 260,
    discountedPrice: 140,
    discountPercentage: 46,
    availableQuantity: '5 combos left',
    pickupWindow: '8:30 PM – 10:00 PM',
    image: gourmetBurgerImg,
    description:
      'Seared gourmet burger in a sesame brioche bun paired with crisp golden fries.',
  },
  {
    id: 7,
    name: 'Wood-Fired Margherita Pizza',
    category: 'Fast Food',
    vendorName: 'Slice & Flame Pizzeria',
    vendorType: 'Fast-Food Outlet',
    vendorLocation: 'College Street',
    vendorBio:
      'Neighborhood pizzeria baking Neapolitan-style hand-stretched pizzas in a stone oven.',
    originalPrice: 380,
    discountedPrice: 190,
    discountPercentage: 50,
    availableQuantity: '4 pizzas left',
    pickupWindow: '8:00 PM – 9:45 PM',
    image: margheritaPizzaImg,
    description:
      'Classic blistered crust topped with crushed tomatoes, fresh mozzarella, and sweet basil leaves.',
  },
  {
    id: 8,
    name: 'Blueberry Muffins & Café Box',
    category: 'Café',
    vendorName: 'Brew & Bean Café',
    vendorType: 'Café',
    vendorLocation: 'Lakeview Lane',
    vendorBio:
      'Cozy specialty coffee house offering artisanal muffins, danishes, sandwiches, and cold brews.',
    originalPrice: 250,
    discountedPrice: 125,
    discountPercentage: 50,
    availableQuantity: '5 boxes left',
    pickupWindow: '5:30 PM – 7:30 PM',
    image: blueberryMuffinsImg,
    description:
      'Freshly baked wild blueberry muffins paired with café pastries and cinnamon danish bites.',
  },
  {
    id: 9,
    name: 'Assorted Sweets & Gulab Jamun',
    category: 'Sweets',
    vendorName: 'Royal Mithai & Desserts',
    vendorType: 'Sweet Shop',
    vendorLocation: 'Old Town Bazaar',
    vendorBio:
      'Traditional sweet shop preparing daily batches of milk-based mithai, syrup desserts, and festive treats.',
    originalPrice: 320,
    discountedPrice: 160,
    discountPercentage: 50,
    availableQuantity: '6 packs left',
    pickupWindow: '7:30 PM – 9:30 PM',
    image: assortedSweetsImg,
    description:
      'Warm saffron-infused gulab jamun garnished with crushed pistachio alongside assorted traditional sweets.',
  },
];
