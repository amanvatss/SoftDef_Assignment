import type { FC } from "react";
import { Facebook, Twitter } from "lucide-react";
import logo from "../../assets/icon.png";

const Footer: FC = () => {
  return (
    <footer className="bg-[#cfe6ff] text-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* --- Top Row: Logo + Follow Us + Contact --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo + Description */}
          <div>
            <h3 className="flex items-center space-x-2 text-blue-600 font-bold text-xl mb-4">
              <img src={logo} alt="Logo" className="h-8" />
              <span>E-Comm</span>
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the
              <br />
              printing and typesetting industry. Lorem 
              <br />Ipsum has been the industry’s standard 
              <br />dummy text ever since the 1500s, when
              <br />an unknown printer.
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-3 max-w-sm">
              Since the 1500s, when an unknown 
              <br />
              printer took a galley of type and
              <br />scrambled.
            </p>
            <div className="flex space-x-4 text-blue-600">
              <a href="#" aria-label="Facebook" className="hover:text-blue-800">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Contact Us</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              E‑Comm, 4578
              <br />
              Marmora Road,
              <br />
              Glasgow D04 89GR
            </p>
          </div>
        </div>

        {/* Bottom Row: Info + Service + My Account + Offers */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Information */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Service</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="font-semibold text-lg mb-3">My Account</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Our Offers */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Our Offers</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-8 border-white" />

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-300 text-center md:text-left">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <img
              src="./src/assets/westernUnion.png"
              alt="Western Union"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
              alt="Paypal"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
