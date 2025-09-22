import type { FC, ReactNode } from "react";

const Modal: FC<{ open: boolean; onClose: () => void; children: ReactNode }> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">✕</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;