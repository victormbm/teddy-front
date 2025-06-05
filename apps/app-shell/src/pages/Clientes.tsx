import { useClientes, useCreateCliente, useDeleteCliente, useUpdateCliente } from 'clientes/src/hooks/useClientes';
import { ClienteCard, CreateClienteModal, DeleteClienteModal, EditClienteModal} from 'design-system';
import { useState } from 'react';

export default function Clientes() {
  
  const { data, isLoading, isError  } = useClientes();

  const createMutation = useCreateCliente();
  const updateMutation = useUpdateCliente();
  const deleteMutation = useDeleteCliente();

  const [clienteSelecionado, setClienteSelecionado] = useState<number | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingCliente, setEditingClient] = useState<any | null>(null);
  const [deletingCliente, setDeletingClient] = useState<any | null>(null);

  const handleSelecionarCliente = (id: number) => {
    setClienteSelecionado(id);
  };
  

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar clientes</p>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">
          {data?.clients?.length ?? 0} clientes encontrados:
        </h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-[#F26D1F] text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Criar cliente
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.clients?.map((cliente: any) => (
          <ClienteCard
            key={cliente.id}
            name={cliente.name}
            salary={cliente.salary}
            companyValuation={cliente.companyValuation}
            isSelected={clienteSelecionado === cliente.id}
            onEdit={() => setEditingClient(cliente)}
            onDelete={() => setDeletingClient(cliente)}
            onSelect={() => handleSelecionarCliente(cliente.id)}
            onCreate={() => setShowCreateModal(true)}
          />
        ))}
      </div>

      {/* Modais */}
              <CreateClienteModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onSubmit={async (name, salary, companyValuation) => {
            await createMutation.mutateAsync({ name, salary, companyValuation });
            setShowCreateModal(false);
          }}
        />



        {editingCliente && (
          <EditClienteModal
            isOpen={!!editingCliente}
            cliente={editingCliente}
            onClose={() => setEditingClient(null)}
            onSubmit={async (nome, salario, empresa) => {
              await updateMutation.mutateAsync({
                id: editingCliente.id,
                name: nome,
                salary: salario,
                companyValuation: empresa,
              });
              setEditingClient(null);
            }}
          />
        )}


      {deletingCliente && (
        <DeleteClienteModal
          nomeCliente={deletingCliente.name}
          isOpen={!!deletingCliente}
          onClose={() => setDeletingClient(null)}
          onConfirm={async () => {
            await deleteMutation.mutateAsync(deletingCliente.id);
            setDeletingClient(null);
          }}
        />
      )}

    </div>
  );
}
