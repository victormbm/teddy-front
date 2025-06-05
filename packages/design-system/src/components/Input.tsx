type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Input = ({ placeholder, value, onChange, className = "" }: Props) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`px-4 py-3 border border-gray-300 rounded w-96 text-gray-900 placeholder-gray-400 text-base ${className}`}
  />
);
