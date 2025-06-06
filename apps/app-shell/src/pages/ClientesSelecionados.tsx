import { HeaderWithSideBar } from 'design-system';
import { useSelectedClientsStore } from '../stores/useSelectedClientsStore';

export default function ClientesSelecionados() {
  const { selectedClients, removeClient, clearClients } = useSelectedClientsStore();

  return (
    <HeaderWithSideBar userName="usuário">
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Clientes selecionados:</h2>

        <div className="flex flex-wrap gap-4">
          {selectedClients.map((cliente) => (
            <div
              key={cliente.id}
              className="border rounded shadow p-4 min-w-[250px] flex flex-col justify-between"
            >
              <div className="text-center mb-2">
                <h3 className="font-bold">{cliente.name}</h3>
                <p>Salário: R$ {cliente.salary.toLocaleString('pt-BR')}</p>
                <p>Empresa: R$ {cliente.companyValuation.toLocaleString('pt-BR')}</p>
              </div>

              <div className="flex justify-end px-2 mt-2">
                <button
                  onClick={() => removeClient(cliente.id)}
                  className="text-red-600 text-xl font-bold"
                >
                  –
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedClients.length > 0 && (
          <button
            onClick={clearClients}
            className="w-full mt-6 border border-orange-500 text-orange-500 py-2 rounded hover:bg-orange-50 transition"
          >
            Limpar todos os selecionados
          </button>
        )}
      </div>
    </HeaderWithSideBar>
  );
}