type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ placeholder, value, onChange }: Props) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="px-4 py-2 border border-gray-300 rounded w-64 text-center"
  />
);
