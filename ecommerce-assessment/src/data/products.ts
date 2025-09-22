// Correct way: import images at the top
import img1 from "../assets/nikepurple.png";
import img2 from "../assets/purse.png";
import img3 from "../assets/bag.png"; 
import img4 from "../assets/nikepurple2.png";
import img5 from "../assets/nikeyellow.png";
import img6 from "../assets/nikeyellow2.png";

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
    imageUrl: img1,
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
    imageUrl: img2,
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
    imageUrl: img3,
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
    imageUrl: img4,
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
    imageUrl: img5,
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
    imageUrl: img6,
  },
  // Generate dummy items (7–26) reusing images
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
    imageUrl: [img1, img2, img3, img4, img5, img6][i % 6], // cycle
  })),
];