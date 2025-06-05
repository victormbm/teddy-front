type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => (
  <button
    onClick={onClick}
    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded"
  >
    {children}
  </button>
);
