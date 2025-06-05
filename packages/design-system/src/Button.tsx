import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => (
  <button onClick={onClick} className="px-4 py-2 bg-blue-600 text-white rounded">
    {children}
  </button>
);
