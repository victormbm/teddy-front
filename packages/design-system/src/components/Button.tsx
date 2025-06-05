type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className = "" }: Props) => (
  <button
    onClick={onClick}
    className={`bg-[#F26D1F] hover:bg-orange-600 text-white font-semibold text-base py-3 px-6 rounded w-96 ${className}`}
  >
    {children}
  </button>
);
