import { Pencil, Trash2, Plus } from 'lucide-react';

type Props = {
  name: string;
  salary: number;
  companyValuation: number;
  isSelected: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onCreate?: () => void;
};

export function ClienteCard({
  name,
  salary,
  companyValuation,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
  onCreate,
}: Props) {
  return (
    <div
      className={`border p-4 rounded-md w-full shadow-md cursor-pointer ${
        isSelected ? 'border-purple-500' : 'border-gray-200'
      }`}
      onClick={onSelect}
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">Salário: R$ {salary.toFixed(2)}</p>
      <p className="text-sm text-gray-600 mb-2">
        Valuation: R$ {companyValuation.toFixed(2)}
      </p>

      <div className="flex justify-between items-center mt-4 px-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCreate?.();
          }}
          className="hover:text-orange-600"
        >
          <Plus size={18} />
        </button>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="hover:text-purple-600"
        >
          <Pencil size={18} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={18} />
        </button>
        
        
      </div>
    </div>
  );
}
