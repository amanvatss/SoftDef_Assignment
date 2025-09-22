import type { FC } from "react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utilis/formatPrice";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: FC<CartDrawerProps> = ({ open, onClose }) => {
  const { cart, removeFromCart, increaseQty, decreaseQty, cartTotal } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50">
      <div className="w-80 bg-white h-full p-4 overflow-y-auto">
        <button onClick={onClose} className="mb-4 text-gray-600">✕ Close</button>

        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <div className="flex items-center mt-1">
                    {/* Decrease button */}
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 border rounded-l bg-gray-100"
                    >
                      –
                    </button>
                    {/* Qty display */}
                    <span className="px-3 border-t border-b">{item.quantity}</span>
                    {/* Increase button */}
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 border rounded-r bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-blue-600 font-bold">
                    {formatPrice(item.discountPrice * item.quantity)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Total */}
            <div className="mt-4 border-t pt-4">
              <h3 className="font-semibold">Total: {formatPrice(cartTotal)}</h3>
            </div>
            <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;