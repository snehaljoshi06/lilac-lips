export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  packaging: string;
  appearance: string;
  description: string;
  batch: string;
  images: {
    src: string;
    alt: string;
    label: string;
    isPrimary?: boolean;
  }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: 'product' | 'lab' | 'styling';
}

export interface TimelineMilestone {
  step: string;
  title: string;
  description: string;
  note?: string;
  image?: string;
}

export interface DiaryEntry {
  id: string;
  title: string;
  dateTag: string;
  text: string;
  annotation: string;
  photo?: string;
  photoAlt?: string;
}

export interface IngredientInfo {
  name: string;
  role: string;
  status: 'confirmed' | 'pending';
  note: string;
}
