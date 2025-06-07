import {
  useClientes,
  useCreateCliente,
  useDeleteCliente,
  useTodosClientes,
  useUpdateCliente,
} from 'clientes/src/hooks/useClientes';
import {
  ClienteCard,
  CreateClienteModal,
  DeleteClienteModal,
  EditClienteModal,
  HeaderWithSideBar,
  Pagination,
} from 'design-system';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useSelectedClientsStore } from '../stores/useSelectedClientsStore';
import { toast } from 'sonner';

export default function Clientes() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const [clienteSelecionado, setClienteSelecionado] = useState<number | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingCliente, setEditingClient] = useState<any | null>(null);
  const [deletingCliente, setDeletingClient] = useState<any | null>(null);

  const { data, isLoading, isError } = useClientes(page, limit);
  const createMutation = useCreateCliente();
  const updateMutation = useUpdateCliente();
  const deleteMutation = useDeleteCliente();

  const location = useLocation();
  const userName = location.state?.name || 'Usuário';
  const queryClient = useQueryClient();

  const {
    data: allClientes = [],
    refetch: refetchTodosClientes,
  } = useTodosClientes();

  const { selectedClients, addClient } = useSelectedClientsStore();

  const handleSelecionarCliente = (id: number) => {
    setClienteSelecionado(id);
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
    setPage(1);
  };

  const idsSelecionados = selectedClients.map((c) => c.id);
  const clientesFiltrados = data?.filter(
    (cliente) => !idsSelecionados.includes(cliente.id)
  ) ?? [];

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar clientes</p>;

  return (
    <HeaderWithSideBar userName={userName}>
      <div className="w-full max-w-[90rem] mx-auto px-6 py-8">
        <div className="p-8">
          {/* Cabeçalho com seletor */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <h2 className="text-lg font-semibold">
              <strong>{allClientes.length}</strong> clientes encontrados:
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sm font-medium">Clientes por página:</span>
              <select
                className="border rounded px-2 py-1 text-sm"
                value={limit}
                onChange={handleLimitChange}
              >
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={32}>32</option>
              </select>
            </div>
          </div>

          {/* Lista de clientes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {clientesFiltrados.map((cliente: any) => (
              <ClienteCard
                key={cliente.id}
                name={cliente.name}
                salary={cliente.salary}
                companyValuation={cliente.companyValuation}
                isSelected={idsSelecionados.includes(cliente.id)}
                onEdit={() => setEditingClient(cliente)}
                onDelete={() => setDeletingClient(cliente)}
                onSelect={() => handleSelecionarCliente(cliente.id)}
                onAddToSelecionados={() => {
                  addClient(cliente);
                  toast.success('Cliente selecionado com sucesso!');
                }}
              />
            ))}
          </div>

          {/* Botão criar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-8">
            <div className="col-span-full">
              <button
                onClick={() => setShowCreateModal(true)}
                className="w-full border-2 border-orange-500 text-orange-500 py-2 rounded-md hover:bg-orange-500 hover:text-white transition text-center"
              >
                Criar cliente
              </button>
            </div>
          </div>

          {/* Paginação */}
          {allClientes.length > limit && (
            <Pagination
              currentPage={page}
              totalPages={Math.ceil(allClientes.length / limit)}
              onPageChange={(newPage) => setPage(newPage)}
            />
          )}

          {/* Modal criar */}
          <CreateClienteModal
            isOpen={showCreateModal}
            onClose={() => setShowCreateModal(false)}
            onSubmit={async (name, salary, companyValuation) => {
              await createMutation.mutateAsync({ name, salary, companyValuation });
              toast.success('Cliente criado com sucesso!');
              await queryClient.invalidateQueries({ queryKey: ['clientes'] });
              setShowCreateModal(false);
            }}
          />

          {/* Modal editar */}
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
                toast.success('Cliente editado com sucesso!');
                await queryClient.invalidateQueries({ queryKey: ['clientes'] });
                setEditingClient(null);
              }}
            />
          )}

          {/* Modal deletar */}
          {deletingCliente && (
            <DeleteClienteModal
              nomeCliente={deletingCliente.name}
              isOpen={!!deletingCliente}
              onClose={() => setDeletingClient(null)}
              onConfirm={async () => {
                await deleteMutation.mutateAsync(deletingCliente.id);
                toast.success('Cliente deletado com sucesso!');
                await refetchTodosClientes();
                setDeletingClient(null);
              }}
            />
          )}
        </div>
      </div>
    </HeaderWithSideBar>
  );
}
