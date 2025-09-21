export interface Product {
  id: string;
  name: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  ratingValue: number;
  ratingCount: number;
  isHot: boolean;
  colors: string[];
  category: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Nike Air Max 270 React",
    price: 534.33,
    discountPrice: 289.43,
    discountPercent: 24,
    ratingValue: 4,
    ratingCount: 120,
    isHot: true,
    colors: ["#000000", "#FF0000"],
    category: "Sneakers",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Nike+Air+Max+270",
  },
  {
    id: "2",
    name: "Adidas Men Running Sneakers",
    price: 420.0,
    discountPrice: 350.0,
    discountPercent: 17,
    ratingValue: 5,
    ratingCount: 80,
    isHot: false,
    colors: ["#0000FF"],
    category: "Sneakers",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Adidas+Sneakers",
  },
  {
    id: "3",
    name: "Puma Running Shoes",
    price: 300.0,
    discountPrice: 250.0,
    discountPercent: 15,
    ratingValue: 4,
    ratingCount: 60,
    isHot: true,
    colors: ["#00FF00", "#FFFF00"],
    category: "Running Shoes",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Puma+Running+Shoes",
  },
  {
    id: "4",
    name: "Reebok Classic Leather",
    price: 200.0,
    discountPrice: 180.0,
    discountPercent: 10,
    ratingValue: 3,
    ratingCount: 40,
    isHot: false,
    colors: ["#FFFFFF", "#000000"],
    category: "Casual Shoes",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Reebok+Classic+Leather",
  },
];