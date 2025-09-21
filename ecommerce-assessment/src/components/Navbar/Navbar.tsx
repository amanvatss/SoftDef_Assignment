import type { FC} from "react";
import { ShoppingCart } from "lucide-react"; 

const Navbar: FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      <div className="flex items-center space-x-2 text-blue-600 font-bold text-xl">
        <span>🛒</span> 
        <span>E-Comm</span>
      </div>
      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a href="#" className="text-blue-500 border-b-2 border-blue-500">
          HOME
        </a>
        <a href="#">BAG</a>
        <a href="#">SNEAKERS</a>
        <a href="#">BELT</a>
        <a href="#">CONTACT</a>
      </nav>
      <div className="flex items-center space-x-2 text-gray-600 font-medium">
        <ShoppingCart size={20} />
        <span>0 Items</span>
        <span>$0.00</span>
      </div>
    </header>
  );
};
export default Navbar;