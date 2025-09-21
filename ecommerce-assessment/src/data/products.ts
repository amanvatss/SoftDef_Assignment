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
    discountPrice: 299.43,
    discountPercent: 24,
    ratingValue: 4,
    ratingCount: 120,
    isHot: true,
    colors: ["#000000", "#FF0000"],
    category: "Sneakers",
    imageUrl: "./src/assets/image product.png",
  },
  {
    id: "2",
    name: "Nike Air Max 270 React",
    price: 534.33,
    discountPrice: 299.43,
    discountPercent: 24,
    ratingValue: 4,
    ratingCount: 120,
    isHot: true,
    colors: ["#000000", "#FF0000"],
    category: "Sneakers",
    imageUrl: "./src/assets/image product (1).png",
  },
  {
    id: "3",
    name: "Nike Air Max 270 React",
    price: 534.33,
    discountPrice: 299.43,
    discountPercent: 24,
    ratingValue: 4,
    ratingCount: 120,
    isHot: true,
    colors: ["#000000", "#FF0000"],
    category: "Sneakers",
    imageUrl: "./src/assets/image product.png",
  },
  {
    id: "4",
    name: "Nike Air Max 270 React",
    price: 534.33,
    discountPrice: 299.43,
    discountPercent: 24,
    ratingValue: 4,
    ratingCount: 120,
    isHot: true,
    colors: ["#000000", "#FF0000"],
    category: "Sneakers",
    imageUrl: "./src/assets/product Picture01.png",
  },
  {
    id: "5",
    name: "Nike Air Max 270 React",
    price: 534.33,
    discountPrice: 299.43,
    discountPercent: 24,
    ratingValue: 4,
    ratingCount: 120,
    isHot: true,
    colors: ["#000000", "#FF0000"],
    category: "Sneakers",
    imageUrl: "./src/assets/product Picture02.png",
  },
  {
    id: "6",
    name: "Nike Air Max 270 React",
    price: 534.33,
    discountPrice: 299.43,
    discountPercent: 24,
    ratingValue: 4,
    ratingCount: 120,
    isHot: true,
    colors: ["#000000", "#FF0000"],
    category: "Sneakers",
    imageUrl: "./src/assets/product Picture01.png",
  },

  // --- dummy items reusing the same 6 images ---
  ...Array.from({ length: 20 }).map((_, i): Product => ({
    id: `${i + 7}`,
    name: `Nike Air Max Dummy ${i + 7}`,
    price: Number((Math.random() * 600 + 100).toFixed(2)), // number
    discountPrice: Number((Math.random() * 300 + 50).toFixed(2)), // number
    discountPercent: Math.floor(Math.random() * 30) + 10, // 10–40% discount
    ratingValue: Math.floor(Math.random() * 5) + 1, // rating 1–5
    ratingCount: Math.floor(Math.random() * 500) + 20, // 20–500 ratings
    isHot: Math.random() > 0.5, // true/false randomly
    colors: ["#000000", "#FF0000"],
    category: "Sneakers",
    imageUrl: [
      "./src/assets/image product.png",
      "./src/assets/image product (1).png",
      "./src/assets/image product.png",
      "./src/assets/product Picture01.png",
      "./src/assets/product Picture02.png",
      "./src/assets/product Picture01.png",
    ][i % 6], // cycle through 6 images
  })),
];
