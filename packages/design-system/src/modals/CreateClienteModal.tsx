import { useEffect, useState } from "react";


type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, salary: number, companyValuation: number) => void;
};

export function CreateClienteModal({ isOpen, onClose, onSubmit }: Props) {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [companyValuation, setCompanyValuation] = useState('');

   useEffect(() => {
    if (isOpen) {
      setName('');
      setSalary('');
      setCompanyValuation('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-[400px] shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Criar cliente:</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <input
          className="border w-full p-2 mb-2 rounded"
          placeholder="Digite o nome:"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="border w-full p-2 mb-2 rounded"
          placeholder="Digite o salário:"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <input
          className="border w-full p-2 mb-4 rounded"
          placeholder="Digite o valor da empresa:"
          value={companyValuation}
          onChange={e => setCompanyValuation(e.target.value)}
        />

        <button
          onClick={() => {
            onSubmit(name, Number(salary), Number(companyValuation));
            onClose();
          }}
          className="bg-orange-600 text-white w-full py-2 rounded hover:bg-orange-700"
        >
          Criar cliente
        </button>
      </div>
    </div>
  );
}
