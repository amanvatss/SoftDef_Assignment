import type { FC } from "react";
import AdidasShoes from "../../assets/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png";

const HeroBanner: FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-blue-500 rounded-lg p-6 md:p-8 text-white my-6">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-xl md:text-2xl font-bold">
          Adidas Men Running Sneakers
        </h2>
        <p className="text-sm md:text-base">
          Performance and design. Taken right to the edge.
        </p>
        <button className="mt-4 underline font-medium">SHOP NOW</button>
      </div>
      <img
        src={AdidasShoes}
        alt="Adidas Men Running Sneakers"
        className="h-32 sm:h-40 md:h-48 object-contain"
      />
    </div>
  );
};
export default HeroBanner;
