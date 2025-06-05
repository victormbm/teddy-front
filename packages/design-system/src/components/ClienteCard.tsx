import { Pencil, Plus, Trash2 } from "lucide-react";

type ClienteCardProps = {
  nome: string;
  salario: number;
  empresa: number;
  isSelected?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onSelect?: () => void;
};

export const ClienteCard = ({
  nome,
  salario,
  empresa,
  isSelected,
  onEdit,
  onDelete,
  onSelect,
}: ClienteCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-2xl border bg-white p-4 shadow-sm transition-all hover:shadow-md ${
        isSelected ? 'border-[#a855f7] ring-2 ring-[#a855f7]' : 'border-zinc-200'
      }`}
    >
      <h2 className="font-bold text-lg text-center">{nome}</h2>
      <p className="text-sm text-center">
        Salário: R$ {Number(salario).toLocaleString('pt-BR')}
      </p>
      <p className="text-sm text-center">
        Empresa: R$ {Number(empresa).toLocaleString('pt-BR')}
      </p>

      <div
        className="flex justify-center gap-4 mt-4"
        onClick={(e) => e.stopPropagation()} // impede clique duplo ao clicar no botão
      >
        <button onClick={onSelect} className="hover:text-[#a855f7]">
          <Plus size={18} />
        </button>
        <button onClick={onEdit} className="hover:text-blue-500">
          <Pencil size={18} />
        </button>
        <button onClick={onDelete} className="hover:text-red-500">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};
