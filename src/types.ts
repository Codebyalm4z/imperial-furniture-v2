export interface Product {
  id: string;
  name: string;
  category: 'sofas' | 'beds' | 'dining' | 'coffee-tables' | 'tv-units' | 'wardrobes' | 'office' | 'custom';
  priceRange: string;
  description: string;
  longDescription: string;
  features: string[];
  dimensions: string;
  materials: string[];
  finishes: string[];
  images: string[];
  featured?: boolean;
}

export type CategoryKey = 'all' | 'sofas' | 'beds' | 'dining' | 'coffee-tables' | 'tv-units' | 'wardrobes' | 'office' | 'custom';

export interface CategoryInfo {
  key: CategoryKey;
  label: string;
  tagline: string;
  description: string;
}

export interface Inquiry {
  id: string;
  productId?: string;
  productName?: string;
  customerName: string;
  email: string;
  phone: string;
  message: string;
  status: 'pending' | 'allocated' | 'completed';
  timestamp: string;
  interiorDesignInquiry?: boolean;
}

export interface GalleryItem {
  title: string;
  category: string;
  img: string;
  description: string;
}
