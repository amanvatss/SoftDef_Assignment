import type { FC} from "react";

const HeroBanner: FC = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 rounded-lg p-8 text-white my-6">
      <div>
        <h2 className="text-2xl font-bold">Adidas Men Running Sneakers</h2>
        <p className="text-sm">Performance and design. Taken right to the edge.</p>
        <button className="mt-4 underline font-medium">SHOP NOW</button>
      </div>
      <img
        src="https://via.placeholder.com/250x150.png?text=Adidas+Sneaker"
        alt="Adidas Men Running Sneakers"
        className="h-32 md:h-40 object-contain"
      />
    </div>
  );
};
export default HeroBanner;