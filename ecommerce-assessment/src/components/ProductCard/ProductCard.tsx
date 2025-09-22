import type { FC } from "react";
import { useState } from "react";
import type { Product } from "./../../data/products";
import Rating from "./../Rating/Rating";
import Badge from "./../Badge/Badge";
import { formatPrice } from "./../../utilis/formatPrice";
import { useCart } from "../../context/CartContext";
import Modal from "../Modal/Modal";

interface Props { product: Product; }

const ProductCard: FC<Props> = ({ product }) => {
  const { addToCart } = useCart();
  const [quickView, setQuickView] = useState(false);

  return (
    <div className="relative bg-white rounded shadow hover:shadow-lg overflow-hidden flex flex-col">
      {product.isHot && <Badge text="HOT" />}

      {/* Image */}
      <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80">
        <img src={product.imageUrl} alt={product.name}
             className="w-full h-full object-cover" loading="lazy"/>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-medium text-gray-800 text-sm md:text-base mb-2">
          {product.name}
        </h3>
        <div className="flex flex-wrap items-center space-x-2 mb-2">
          <span className="font-bold text-blue-500">{formatPrice(product.discountPrice)}</span>
          <span className="line-through text-gray-400 text-sm">{formatPrice(product.price)}</span>
          <span className="text-red-500 text-xs">{product.discountPercent}% Off</span>
        </div>
        <Rating value={product.ratingValue} count={product.ratingCount} />

        {/* Actions */}
        <div className="flex space-x-2 mt-3">
          <button onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            Add to Cart
          </button>
          <button onClick={() => setQuickView(true)} 
            className="text-blue-500 underline text-sm">Quick View</button>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal open={quickView} onClose={() => setQuickView(false)}>
        <img src={product.imageUrl} alt={product.name} className="h-40 mx-auto object-contain mb-4" />
        <h2 className="font-bold text-lg">{product.name}</h2>
        <p className="text-gray-600 mt-2">This is a quick view with extended details.</p>
      </Modal>
    </div>
  );
};
export default ProductCard;