
export type Category = 'All' | 'Lighting' | 'Fans' | 'Wiring' | 'Industrial' | 'Smart Home' | 'CCTV' | 'Switches' | 'Accessories';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  image: string;
  features: string[];
  specs: Record<string, string>;
  featured?: boolean;
}

export type PagePath = 'home' | 'products' | 'services' | 'about' | 'faq' | 'gallery';

// Added ChatMessage interface to resolve import error in ChatAssistant
export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}
