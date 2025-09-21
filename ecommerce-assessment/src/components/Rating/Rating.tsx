import type { FC} from "react";

interface Props {
  value: number;
  count: number;
}

const Rating: FC<Props> = ({ value, count }) => {
  return (
    <div className="flex items-center space-x-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < value ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}
      <span className="text-xs text-gray-500">({count})</span>
    </div>
  );
};
export default Rating;