import { HeaderWithSideBar } from 'design-system';
import { useLocation } from 'react-router-dom';

export default function ClientesSelecionados() {
  const location = useLocation();
  const selectedClients = location.state?.selectedClients || [];

  return (
    <HeaderWithSideBar>
      <div className="w-full max-w-[90rem] mx-auto px-6 py-8">
        <h2 className="text-lg font-semibold mb-6">
          Clientes selecionados:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {selectedClients.map((cliente: any, index: number) => (
            <div
              key={index}
              className="border rounded p-4 bg-white shadow-sm text-sm"
            >
              <p className="font-semibold">{cliente.name}</p>
              <p>Salário: R${cliente.salary}</p>
              <p>Empresa: R${cliente.companyValuation}</p>
            </div>
          ))}
        </div>
      </div>
    </HeaderWithSideBar>
  );
}
