export type MenuCategory = 'coffee' | 'tea' | 'bakery' | 'bistro';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  notes?: string;
  dietary?: ('Vegan' | 'Vegetarian' | 'GF' | 'Organic' | 'House Specialty')[];
  origin?: string;
  featured?: boolean;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  selectedMilk?: string;
  notes?: string;
}
