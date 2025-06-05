import { useLocation } from "react-router-dom";

export default function ClientesPage() {
  const location = useLocation();
  const name = location.state?.name || "Usuário";

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Olá, {name}!</h1>
      <p className="text-gray-600 mt-2">Aqui vai aparecer a lista de clientes.</p>
    </div>
  );
}
