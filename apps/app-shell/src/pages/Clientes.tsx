import { useClientes } from 'clientes/src/hooks/useClientes';
import { ClienteCard } from 'design-system'; 
import { useState } from 'react';

export default function Clientes() {
  const { data, isLoading, isError } = useClientes();

  const [clienteSelecionado, setClienteSelecionado] = useState<number | null>(null);

  const handleSelecionarCliente = (id: number) => {
    setClienteSelecionado(id);
  };

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar clientes</p>;

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">
        {data?.clients?.length ?? 0} clientes encontrados:
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.clients?.map((cliente: any) => (
          <ClienteCard
            key={cliente.id}
            nome={cliente.name}
            salario={cliente.salary}
            empresa={cliente.companyValuation}
            isSelected={clienteSelecionado === cliente.id}
            onEdit={() => console.log('Editar', cliente.id)}
            onDelete={() => console.log('Deletar', cliente.id)}
            onSelect={() => handleSelecionarCliente(cliente.id)}
          />
        ))}
      </div>
    </div>
  );
}
