import { useClientes } from 'clientes/src/hooks/useClientes';
import { ClienteCard } from 'design-system'; 
export default function Clientes() {
  const { data, isLoading, isError } = useClientes();

    console.log('Clientes:', data);

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar clientes</p>;

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">
        {data.length} clientes encontrados:
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {data?.clients?.map((cliente: any) => (
        <div key={cliente.id} className="border p-2 mb-2 bg-white">
            <p>Nome: {cliente.name}</p>
            <p>Salário: {cliente.salary}</p>
            <p>Empresa: {cliente.companyValuation}</p>
        </div>
        ))}

      </div>
    </div>
  );
}
