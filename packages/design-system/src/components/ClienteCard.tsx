import { Pencil, Trash2, Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';

type Props = {
  name: string;
  salary: number;
  companyValuation: number;
  isSelected: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onAddToSelecionados?: () => void;
  onRemoveFromSelecionados?: () => void;
};

export function ClienteCard({
  name,
  salary,
  companyValuation,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
  onAddToSelecionados,
  onRemoveFromSelecionados,
}: Props) {
  return (
    <div
      className={`border p-4 rounded-md w-full shadow-md cursor-pointer flex flex-col items-center text-center ${
        isSelected ? 'border-purple-500' : 'border-gray-200'
      }`}
      onClick={onSelect}
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">
        Salário: R$ {salary.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        Empresa: R$ {companyValuation.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {isSelected ? (
          <button
            data-testid="remove-button"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveFromSelecionados?.();
            }}
            className="hover:text-orange-600"
          >
            <Minus size={18} />
          </button>
        ) : (
          <button
            data-testid="add-button"
            onClick={(e) => {
              e.stopPropagation();
              toast.success('Cliente adicionado aos selecionados');
              onAddToSelecionados?.();
            }}
            className="hover:text-orange-600"
          >
            <Plus size={18} />
          </button>
        )}

        <button
          data-testid="edit-button"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="hover:text-purple-600"
        >
          <Pencil size={18} />
        </button>

        <button
          data-testid="delete-button"
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
