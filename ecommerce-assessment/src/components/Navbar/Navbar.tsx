import type { FC } from "react";
import { ShoppingCart, Menu } from "lucide-react"; 
interface NavbarProps {
  onMenuClick: () => void; 
}
const Navbar: FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-blue-600 font-bold text-xl">
        <img src="./src/assets/icon.png" alt="Logo" className="h-8" />
        <span>E-Comm</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a href="#" className="text-blue-500 border-b-2 border-blue-500">HOME</a>
        <a href="#">BAG</a>
        <a href="#">SNEAKERS</a>
        <a href="#">BELT</a>
        <a href="#">CONTACT</a>
      </nav>

      {/* Cart + Burger */}
      <div className="flex items-center space-x-4 text-gray-600 font-medium">
        <div className="flex items-center space-x-2">
          <ShoppingCart size={20} />
          <span className="hidden sm:inline">0 Items</span>
          <span className="hidden sm:inline text-gray-400">$0.00</span>
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700" onClick={onMenuClick}>
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};
export default Navbar;