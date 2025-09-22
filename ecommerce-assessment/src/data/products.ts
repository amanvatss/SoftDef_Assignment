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
    imageUrl: "/nikepurple.png",
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
    imageUrl: "/purse.png",
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
    imageUrl: "/bag.png",
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
    imageUrl: "/nikepurple2.png",
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
    imageUrl: "/nikeyellow.png",
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
    imageUrl: "/nikeyellow2.png",
  },
  // Dummy items (7–26) reusing the same 6 images in /public
  ...Array.from({ length: 20 }).map((_, i): Product => ({
    id: `${i + 7}`,
    name: `Nike Air Max Dummy ${i + 7}`,
    price: Number((Math.random() * 600 + 100).toFixed(2)),
    discountPrice: Number((Math.random() * 300 + 50).toFixed(2)),
    discountPercent: Math.floor(Math.random() * 30) + 10,
    ratingValue: Math.floor(Math.random() * 5) + 1,
    ratingCount: Math.floor(Math.random() * 500) + 20,
    isHot: Math.random() > 0.5,
    colors: ["#000000", "#FF0000"],
    category: "Sneakers",
    imageUrl: [
      "/nikepurple.png",
      "/purse.png",
      "/bag.png",
      "/nikepurple2.png",
      "/nikeyellow.png",
      "/nikeyellow2.png",
    ][i % 6], // cycle through public assets
  })),
];