import type { FC} from "react";
import type { Product } from "../../data/products";
import Rating from "../Rating/Rating";
import Badge from "../Badge/badge";
import { formatPrice } from "../../utilis/formatPrice";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="relative bg-white rounded shadow hover:shadow-lg p-4 flex flex-col">
      {product.isHot && <Badge text="HOT" />}
      <img src={product.imageUrl} alt={product.name} className="h-40 object-contain mb-3" loading="lazy" />
      <h3 className="font-medium text-gray-800 text-sm">{product.name}</h3>
      <div className="flex items-center space-x-2 mt-1">
        <span className="font-bold text-blue-500">{formatPrice(product.discountPrice)}</span>
        <span className="line-through text-gray-400 text-sm">{formatPrice(product.price)}</span>
        <span className="text-red-500 text-xs">{product.discountPercent}% Off</span>
      </div>
      <Rating value={product.ratingValue} count={product.ratingCount} />
    </div>
  );
};

export default ProductCard;