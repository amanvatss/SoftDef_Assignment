import type { FC} from "react";

const Badge: FC<{ text: string }> = ({ text }) => {
  return (
    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
      {text}
    </span>
  );
};
export default Badge;