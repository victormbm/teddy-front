type ClienteCardProps = {
  nome: string;
  salario: string;
  empresa: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onSelect?: () => void;
};

export const ClienteCard = ({ nome, salario, empresa, onEdit, onDelete, onSelect }: ClienteCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border">
      <h2 className="font-semibold text-center text-lg">{nome}</h2>
      <p className="text-sm text-center">Salário: R${salario}</p>
      <p className="text-sm text-center">Empresa: R${empresa}</p>

      <div className="flex justify-center gap-2 mt-4">
        <button onClick={onSelect} className="text-lg">➕</button>
        <button onClick={onEdit} className="text-lg">✏️</button>
        <button onClick={onDelete} className="text-lg">🗑️</button>
      </div>
    </div>
  );
};
