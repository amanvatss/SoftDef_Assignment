import type { FC, ReactNode } from "react";

interface Props {
  title: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  children: ReactNode;
}

const FilterPanel: FC<Props> = ({ title, open, setOpen, children }) => {
  return (
    <div className="border-b pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full mb-2 text-sm font-semibold text-gray-700"
        aria-expanded={open}
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="ml-2">{children}</div>}
    </div>
  );
};

export default FilterPanel;