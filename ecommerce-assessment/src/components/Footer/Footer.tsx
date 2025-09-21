
import type { FC} from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-blue-100 pt-12 pb-6 px-8 mt-12 text-sm text-gray-700">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold text-blue-600 text-lg mb-2">E-Comm</h3>
          <p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Information</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Service</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">My Account</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Our Offers</h4>
          <ul className="space-y-1">
            <li>Discounts</li>
            <li>Specials</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        © 2018 Ecommerce theme by lorem.com
      </div>
    </footer>
  );
};
export default Footer;