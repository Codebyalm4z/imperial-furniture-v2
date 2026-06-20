import { Product, CategoryInfo, GalleryItem } from './types';

export const categories: CategoryInfo[] = [
  {
    key: 'all',
    label: 'All Collections',
    tagline: 'Premium Furniture & Interior Solutions Since 1983',
    description: 'Explore our complete range of quality furniture for homes and businesses across Mumbai.'
  },
  {
    key: 'sofas',
    label: 'Sofas',
    tagline: 'Comfortable Seating for Living Spaces',
    description: 'Modern and classic sofa sets crafted with premium materials and quality upholstery.'
  },
  {
    key: 'beds',
    label: 'Beds',
    tagline: 'Restful Bedroom Furniture',
    description: 'Luxury beds and bedroom furniture designed for comfort and lasting quality.'
  },
  {
    key: 'dining',
    label: 'Dining Sets',
    tagline: 'Dining Room Furniture',
    description: 'Wooden dining tables and chairs built for family gatherings and daily use.'
  },
  {
    key: 'coffee-tables',
    label: 'Coffee Tables',
    tagline: 'Living Room Accent Pieces',
    description: 'Stylish coffee tables to complement your living room furniture.'
  },
  {
    key: 'tv-units',
    label: 'TV Units',
    tagline: 'Entertainment Furniture',
    description: 'Functional TV units and media storage designed for modern homes.'
  },
  {
    key: 'wardrobes',
    label: 'Wardrobes',
    tagline: 'Bedroom Storage Solutions',
    description: 'Premium wardrobes with quality finishes and practical storage layouts.'
  },
  {
    key: 'office',
    label: 'Office Furniture',
    tagline: 'Professional Workspace Solutions',
    description: 'Executive desks, chairs, and office furniture for commercial and home offices.'
  },
  {
    key: 'custom',
    label: 'Custom Furniture',
    tagline: 'Made to Your Specifications',
    description: 'Custom furniture solutions tailored to your space, style, and requirements.'
  }
];

export const homeCategories = [
  { label: 'Sofas', key: 'sofas' as const },
  { label: 'Beds', key: 'beds' as const },
  { label: 'Dining Sets', key: 'dining' as const },
  { label: 'Coffee Tables', key: 'coffee-tables' as const },
  { label: 'TV Units', key: 'tv-units' as const },
  { label: 'Wardrobes', key: 'wardrobes' as const },
  { label: 'Office Furniture', key: 'office' as const },
  { label: 'Custom Furniture', key: 'custom' as const },
];

export const products: Product[] = [
  {
    id: 'modern-sofa-set',
    name: 'Modern Sofa Set',
    category: 'sofas',
    priceRange: 'Price on Request',
    description: 'A contemporary sofa set with quality upholstery and durable frame construction for living rooms.',
    longDescription: 'Our Modern Sofa Set combines comfort with clean design. Built on a solid wood frame with high-density foam cushioning and premium fabric or leather upholstery options. Available in multiple configurations to suit your living space.',
    features: [
      'Solid wood frame construction',
      'High-density foam cushioning',
      'Premium fabric or leather upholstery options',
      'Custom sizes available on request'
    ],
    dimensions: 'Available in standard and custom sizes',
    materials: ['Solid Wood', 'High-Density Foam', 'Premium Fabric or Leather'],
    finishes: ['Charcoal Grey', 'Beige', 'Brown Leather', 'Custom colours on request'],
    images: ['/src/assets/images/imperial_hero_1781946999698.jpg', 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  },
  {
    id: 'luxury-king-bed',
    name: 'Luxury King Bed',
    category: 'beds',
    priceRange: 'Price on Request',
    description: 'A premium king-size bed with quality headboard and sturdy frame for master bedrooms.',
    longDescription: 'The Luxury King Bed is designed for comfort and durability. Features a padded headboard, solid wood or engineered wood frame, and quality finishes. Custom sizes and headboard designs available.',
    features: [
      'King-size and custom dimensions available',
      'Padded headboard with quality upholstery',
      'Solid wood or engineered wood frame',
      'Under-bed storage options available'
    ],
    dimensions: 'King size and custom sizes available',
    materials: ['Solid Wood', 'Engineered Wood', 'Premium Upholstery'],
    finishes: ['Walnut', 'Teak Finish', 'White', 'Custom finishes on request'],
    images: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  },
  {
    id: 'wooden-dining-table',
    name: 'Wooden Dining Table',
    category: 'dining',
    priceRange: 'Price on Request',
    description: 'A solid wooden dining table with matching chairs for family dining rooms.',
    longDescription: 'Our Wooden Dining Table is crafted from quality timber with a durable finish. Available in 4-seater, 6-seater, and 8-seater configurations. Matching dining chairs can be supplied as a complete set.',
    features: [
      'Solid wood construction',
      'Multiple size options available',
      'Matching dining chairs available',
      'Custom dimensions on request'
    ],
    dimensions: '4, 6, and 8-seater options available',
    materials: ['Solid Wood', 'Quality Veneer', 'Protective Finish'],
    finishes: ['Natural Wood', 'Dark Walnut', 'Teak Finish', 'Custom finishes on request'],
    images: ['/src/assets/images/imperial_dining_1781947019011.jpg', 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  },
  {
    id: 'coffee-table-collection',
    name: 'Coffee Table Collection',
    category: 'coffee-tables',
    priceRange: 'Price on Request',
    description: 'Stylish coffee tables in wood, glass, and mixed materials for living rooms.',
    longDescription: 'Our Coffee Table Collection offers a range of designs to complement your sofa and living room layout. Available in wood, glass-top, and combined material options with storage drawers on select models.',
    features: [
      'Multiple design options available',
      'Wood, glass, and mixed material finishes',
      'Storage drawer options on select models',
      'Custom sizes available'
    ],
    dimensions: 'Standard and custom sizes available',
    materials: ['Solid Wood', 'Tempered Glass', 'Metal Accents'],
    finishes: ['Walnut', 'Black', 'White', 'Natural Wood'],
    images: ['https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1200', 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1200'],
    featured: false
  },
  {
    id: 'tv-unit',
    name: 'TV Unit',
    category: 'tv-units',
    priceRange: 'Price on Request',
    description: 'Functional TV units with storage compartments for media equipment and accessories.',
    longDescription: 'Our TV Units are designed to hold your television and organise media equipment neatly. Available in wall-mounted and floor-standing designs with drawers and open shelving options.',
    features: [
      'Wall-mounted and floor-standing options',
      'Cable management provisions',
      'Drawer and shelf storage',
      'Custom width available'
    ],
    dimensions: 'Standard and custom widths available',
    materials: ['Engineered Wood', 'Solid Wood Accents', 'Metal Hardware'],
    finishes: ['Walnut', 'White', 'Black', 'Custom finishes on request'],
    images: ['https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200'],
    featured: false
  },
  {
    id: 'premium-wardrobe',
    name: 'Premium Wardrobe',
    category: 'wardrobes',
    priceRange: 'Price on Request',
    description: 'Spacious wardrobes with quality finishes and practical internal storage layouts.',
    longDescription: 'Our Premium Wardrobe range offers sliding and hinged door options with well-planned internal compartments for clothes, accessories, and storage. Custom sizes and internal layouts available.',
    features: [
      'Sliding and hinged door options',
      'Custom internal layout planning',
      'Mirror panel options available',
      'Built-in lighting options on request'
    ],
    dimensions: 'Custom sizes to fit your room',
    materials: ['Engineered Wood', 'Premium Laminate', 'Quality Hardware'],
    finishes: ['White', 'Walnut', 'Grey', 'Custom finishes on request'],
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200', 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1200'],
    featured: false
  },
  {
    id: 'executive-office-desk',
    name: 'Executive Office Desk',
    category: 'office',
    priceRange: 'Price on Request',
    description: 'A professional executive desk with drawers and quality wood finish for office use.',
    longDescription: 'The Executive Office Desk provides a spacious work surface with integrated drawer storage. Suitable for home offices and commercial workspaces. Custom sizes and configurations available.',
    features: [
      'Spacious work surface',
      'Integrated drawer storage',
      'Cable management provisions',
      'Custom sizes available'
    ],
    dimensions: 'Standard and custom sizes available',
    materials: ['Solid Wood', 'Engineered Wood', 'Quality Hardware'],
    finishes: ['Walnut', 'Mahogany', 'Black', 'Custom finishes on request'],
    images: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200', 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  },
  {
    id: 'custom-furniture',
    name: 'Custom Furniture',
    category: 'custom',
    priceRange: 'Price on Request',
    description: 'Bespoke furniture made to your exact specifications, dimensions, and design preferences.',
    longDescription: 'Imperial Furniture specialises in custom furniture solutions. Share your requirements and our team will design and manufacture furniture tailored to your space, style, and budget. Visit our Bandra West showroom to discuss your project.',
    features: [
      'Made to your exact dimensions',
      'Choice of materials and finishes',
      'Design consultation included',
      'Residential and commercial projects'
    ],
    dimensions: 'As per your requirements',
    materials: ['Wood', 'Engineered Wood', 'Metal', 'Glass', 'Upholstery'],
    finishes: ['As per your selection'],
    images: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200', 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200'],
    featured: false
  }
];

export const galleryItems: GalleryItem[] = [
  {
    title: 'Luxury Sofa Collections',
    category: 'Living Room',
    img: '/src/assets/images/imperial_hero_1781946999698.jpg',
    description: 'Premium sofa sets designed for comfort and style in living rooms and lounge areas.'
  },
  {
    title: 'Bedroom Furniture',
    category: 'Bedroom',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200',
    description: 'Quality beds, wardrobes, and bedroom furniture crafted for restful living spaces.'
  },
  {
    title: 'Dining Furniture',
    category: 'Dining Room',
    img: '/src/assets/images/imperial_dining_1781947019011.jpg',
    description: 'Wooden dining tables and chairs built for family meals and entertaining guests.'
  },
  {
    title: 'Office Furniture',
    category: 'Office',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
    description: 'Executive desks, chairs, and office furniture for professional workspaces.'
  },
  {
    title: 'Custom Furniture',
    category: 'Bespoke',
    img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200',
    description: 'Furniture made to your specifications — dimensions, materials, and finishes of your choice.'
  },
  {
    title: 'Interior Projects',
    category: 'Interiors',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    description: 'Residential and commercial interior furnishing projects completed across Mumbai.'
  }
];

export const showrooms = {
  address: 'M K Chamber (Daulat House), Turner Road, Opp. Nutan Nagar, Bandra West, Mumbai 400050',
  phone: '+91 9820470649',
  email: 'contact@imperialfurniture.in',
  hours: [
    { days: 'Monday – Saturday', hours: '10:30 AM – 8:00 PM' },
    { days: 'Sunday', hours: 'By Prior Appointment Only' }
  ],
  mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3934336044733!2d72.8335022!3d19.0574889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e6a17b8f2d%3A0xe54622b7dc0ceba3!2sTurner%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1718872011000!5m2!1sen!2sin'
};

export const designServices = [
  {
    id: 'custom-design',
    title: 'Custom Furniture Design',
    description: 'Furniture designed and manufactured to your exact specifications, dimensions, and material preferences.',
    deliverable: 'Custom design plans and material samples.',
    duration: 'As per project scope'
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description: 'Layout planning and furniture placement to make the best use of your available space.',
    deliverable: 'Space layout plans and furniture recommendations.',
    duration: '1 – 2 Weeks'
  },
  {
    id: 'residential',
    title: 'Residential Interiors',
    description: 'Complete interior furnishing solutions for homes including furniture selection, custom pieces, and installation.',
    deliverable: 'Furnished rooms with quality furniture and finishes.',
    duration: 'As per project scope'
  },
  {
    id: 'commercial',
    title: 'Commercial Interiors',
    description: 'Office and commercial space furnishing with durable, professional furniture suited to business environments.',
    deliverable: 'Fully furnished commercial spaces.',
    duration: 'As per project scope'
  },
  {
    id: 'consultation',
    title: 'Furniture Consultation',
    description: 'Visit our Turner Road showroom or schedule a consultation to discuss your furniture and interior requirements.',
    deliverable: 'Personalised furniture recommendations and quotations.',
    duration: '1 – 2 Hours'
  }
];
