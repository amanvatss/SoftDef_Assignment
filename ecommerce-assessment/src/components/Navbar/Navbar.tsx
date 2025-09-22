import type { FC } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import CartDrawer from "../Cart/CartDrawer";
import logo from "../../assets/icon.png";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: FC<NavbarProps> = ({ onMenuClick }) => {
  const { cartCount, cartTotal } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-blue-600 font-bold text-xl">
        <img src={logo} alt="Logo" className="h-8" />
        <span>E-Comm</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a className="text-blue-500 border-b-2 border-blue-500">HOME</a>
        <a>BAG</a>
        <a>SNEAKERS</a>
        <a>BELT</a>
        <a>CONTACT</a>
      </nav>

      {/* Cart + Burger */}
      <div className="flex items-center space-x-4 relative">
        {/* Cart section */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setCartOpen(true)}
        >
          <div className="relative">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </div>

          {/* Show live total */}
          <span
            className={`hidden sm:inline ${
              cartTotal > 0 ? "text-blue-600 font-semibold" : "text-gray-500"
            }`}
          >
            {cartTotal > 0 ? `$${cartTotal.toFixed(2)}` : "$0.00"}
          </span>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700" onClick={onMenuClick}>
          <Menu size={28} />
        </button>
      </div>

      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};
export default Navbar;
