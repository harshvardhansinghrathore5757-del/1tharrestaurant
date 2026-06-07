export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: string;
  image?: string;
  spicy?: boolean;
  vegetarian?: boolean;
}
