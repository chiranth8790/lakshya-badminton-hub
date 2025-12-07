export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  features?: string[];
  specifications?: Record<string, string>;
  skillLevel?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All';
  playingStyle?: 'Power' | 'Control' | 'All-Round';
  weight?: string;
  balance?: 'Head Heavy' | 'Even' | 'Head Light';
  gripSize?: string;
  size?: string;
  color?: string;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  // Badminton Racquets
  {
    id: "rac-001",
    name: "Yonex Astrox 99 Pro",
    brand: "Yonex",
    category: "Badminton",
    subcategory: "Racquets",
    price: 18999,
    originalPrice: 22999,
    image: "https://images.unsplash.com/photo-1617883861744-13b534e3b928?w=500&q=80",
    description: "The Yonex Astrox 99 Pro is designed for players who want maximum power with steep attack angles.",
    features: ["Rotational Generator System", "Namd", "Power-Assist Bumper", "New Built-in T-Joint"],
    specifications: {
      "Flex": "Stiff",
      "Frame": "HM Graphite + Namd + Tungsten",
      "Shaft": "HM Graphite + Namd",
      "Weight": "4U (80-84g)",
      "Grip Size": "G5",
      "Max Tension": "28 lbs"
    },
    skillLevel: "Advanced",
    playingStyle: "Power",
    weight: "4U",
    balance: "Head Heavy",
    gripSize: "G5",
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: "rac-002",
    name: "Victor Thruster K Falcon",
    brand: "Victor",
    category: "Badminton",
    subcategory: "Racquets",
    price: 12499,
    originalPrice: 14999,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&q=80",
    description: "Professional grade racquet with excellent control and power balance.",
    skillLevel: "Intermediate",
    playingStyle: "All-Round",
    weight: "3U",
    balance: "Even",
    gripSize: "G5",
    inStock: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: "rac-003",
    name: "Li-Ning Axforce 80",
    brand: "Li-Ning",
    category: "Badminton",
    subcategory: "Racquets",
    price: 15999,
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500&q=80",
    description: "Cutting-edge technology for aggressive players seeking powerful smashes.",
    skillLevel: "Advanced",
    playingStyle: "Power",
    weight: "4U",
    balance: "Head Heavy",
    gripSize: "G5",
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 67
  },
  {
    id: "rac-004",
    name: "Yonex Nanoflare 700",
    brand: "Yonex",
    category: "Badminton",
    subcategory: "Racquets",
    price: 16999,
    image: "https://images.unsplash.com/photo-1617883861744-13b534e3b928?w=500&q=80",
    description: "Lightning-fast racquet designed for quick exchanges and control-oriented play.",
    skillLevel: "Intermediate",
    playingStyle: "Control",
    weight: "5U",
    balance: "Head Light",
    gripSize: "G5",
    inStock: true,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 112
  },
  // Badminton Shoes
  {
    id: "shoe-001",
    name: "Yonex Power Cushion 65Z3",
    brand: "Yonex",
    category: "Badminton",
    subcategory: "Shoes",
    price: 11999,
    originalPrice: 13999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    description: "Premium court shoes with exceptional cushioning and stability for intense games.",
    features: ["Power Cushion+", "Lateral Shell", "Hexagrip Sole", "Syncro-Fit Insole"],
    size: "UK 6-12",
    color: "White/Red",
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 203
  },
  {
    id: "shoe-002",
    name: "Victor A970ACE",
    brand: "Victor",
    category: "Badminton",
    subcategory: "Shoes",
    price: 8999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
    description: "Lightweight performance shoes with excellent grip and support.",
    size: "UK 6-11",
    color: "Black/Gold",
    inStock: true,
    rating: 4.5,
    reviewCount: 145
  },
  {
    id: "shoe-003",
    name: "Li-Ning Ranger TD",
    brand: "Li-Ning",
    category: "Badminton",
    subcategory: "Shoes",
    price: 6499,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
    description: "Value-packed shoes with non-marking sole and good cushioning.",
    size: "UK 6-11",
    color: "Navy Blue",
    inStock: true,
    rating: 4.3,
    reviewCount: 178
  },
  // Kitbags
  {
    id: "bag-001",
    name: "Yonex Pro Tournament Bag",
    brand: "Yonex",
    category: "Badminton",
    subcategory: "Kitbags",
    price: 5999,
    originalPrice: 7499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    description: "6-racquet capacity tournament bag with thermal compartment.",
    features: ["Thermal Lining", "Multiple Compartments", "Shoe Pocket", "Accessory Pockets"],
    inStock: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: "bag-002",
    name: "Victor BR9211 Backpack",
    brand: "Victor",
    category: "Badminton",
    subcategory: "Kitbags",
    price: 3499,
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&q=80",
    description: "Stylish backpack for casual players with 2-racquet capacity.",
    inStock: true,
    rating: 4.4,
    reviewCount: 56
  },
  // Shuttles
  {
    id: "shuttle-001",
    name: "Yonex AS-50 Feather",
    brand: "Yonex",
    category: "Badminton",
    subcategory: "Shuttles",
    price: 2499,
    image: "https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?w=500&q=80",
    description: "Tournament grade feather shuttlecocks (pack of 12).",
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 312
  },
  {
    id: "shuttle-002",
    name: "Li-Ning A+600 Nylon",
    brand: "Li-Ning",
    category: "Badminton",
    subcategory: "Shuttles",
    price: 799,
    image: "https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?w=500&q=80",
    description: "Durable nylon shuttlecocks for practice sessions (pack of 6).",
    inStock: true,
    rating: 4.2,
    reviewCount: 234
  },
  // Strings
  {
    id: "string-001",
    name: "Yonex BG-65",
    brand: "Yonex",
    category: "Badminton",
    subcategory: "Strings",
    price: 399,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    description: "Most popular all-round string with excellent durability.",
    specifications: {
      "Gauge": "0.70mm",
      "Length": "10m",
      "Tension": "20-28 lbs"
    },
    inStock: true,
    rating: 4.6,
    reviewCount: 456
  },
  {
    id: "string-002",
    name: "Yonex BG-80 Power",
    brand: "Yonex",
    category: "Badminton",
    subcategory: "Strings",
    price: 549,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    description: "High repulsion string for powerful smashes.",
    specifications: {
      "Gauge": "0.68mm",
      "Length": "10m",
      "Tension": "20-28 lbs"
    },
    inStock: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 289
  },
  // Grips
  {
    id: "grip-001",
    name: "Yonex AC102EX Super Grap",
    brand: "Yonex",
    category: "Badminton",
    subcategory: "Grips",
    price: 299,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    description: "Premium overgrip with excellent sweat absorption (pack of 3).",
    inStock: true,
    rating: 4.7,
    reviewCount: 567
  },
  // Other Sports
  {
    id: "cricket-001",
    name: "SG Test Cricket Bat",
    brand: "SG",
    category: "Cricket",
    subcategory: "Bats",
    price: 8999,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&q=80",
    description: "English willow cricket bat for professional players.",
    inStock: true,
    rating: 4.6,
    reviewCount: 123
  },
  {
    id: "football-001",
    name: "Nike Flight Football",
    brand: "Nike",
    category: "Football",
    subcategory: "Footballs",
    price: 4999,
    image: "https://images.unsplash.com/photo-1614632537239-e2258bc5e55b?w=500&q=80",
    description: "Official match ball with aerodynamic groove technology.",
    inStock: true,
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: "tt-001",
    name: "Butterfly Timo Boll TT Bat",
    brand: "Butterfly",
    category: "Table Tennis",
    subcategory: "Bats",
    price: 6999,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    description: "Professional table tennis paddle with premium rubber.",
    inStock: true,
    rating: 4.7,
    reviewCount: 67
  }
];

export const categories = {
  badminton: [
    { name: "Racquets", icon: "🏸", count: 45 },
    { name: "Shoes", icon: "👟", count: 28 },
    { name: "Kitbags", icon: "🎒", count: 15 },
    { name: "Shuttles", icon: "🪶", count: 12 },
    { name: "Strings", icon: "🧵", count: 20 },
    { name: "Grips", icon: "🤲", count: 18 },
    { name: "Nets", icon: "🥅", count: 8 }
  ],
  otherSports: [
    { name: "Cricket", icon: "🏏", count: 35 },
    { name: "Football", icon: "⚽", count: 22 },
    { name: "Volleyball", icon: "🏐", count: 15 },
    { name: "Table Tennis", icon: "🏓", count: 18 }
  ]
};

export const brands = ["Yonex", "Victor", "Li-Ning", "Apacs", "Carlton", "Forza"];
export const skillLevels = ["Beginner", "Intermediate", "Advanced", "All"];
export const playingStyles = ["Power", "Control", "All-Round"];
export const balanceTypes = ["Head Heavy", "Even", "Head Light"];
export const priceRanges = [
  { label: "Under ₹5,000", min: 0, max: 5000 },
  { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
  { label: "₹10,000 - ₹15,000", min: 10000, max: 15000 },
  { label: "₹15,000 - ₹20,000", min: 15000, max: 20000 },
  { label: "Above ₹20,000", min: 20000, max: Infinity }
];
