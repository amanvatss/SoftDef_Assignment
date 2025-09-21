import type { FC } from "react";
import type { Product } from "../../data/products";
import Rating from "../Rating/Rating";
import Badge from "../Badge/Badge";
import { formatPrice } from "../../utilis/formatPrice";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="relative bg-white rounded shadow hover:shadow-lg overflow-hidden flex flex-col">
      {product.isHot && <Badge text="HOT" />}

      {/* Image wrapper taking full available area */}
      <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover" // use object-cover instead of object-contain
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-medium text-gray-800 text-sm md:text-base mb-2">
          {product.name}
        </h3>
        <div className="flex flex-wrap items-center space-x-2 mb-2">
          <span className="font-bold text-blue-500">
            {formatPrice(product.discountPrice)}
          </span>
          <span className="line-through text-gray-400 text-sm">
            {formatPrice(product.price)}
          </span>
          <span className="text-red-500 text-xs">
            {product.discountPercent}% Off
          </span>
        </div>
        <Rating value={product.ratingValue} count={product.ratingCount} />
      </div>
    </div>
  );
};

export default ProductCard;
