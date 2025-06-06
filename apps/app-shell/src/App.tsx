import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Home from "./pages/Home";
import ClientesSelecionados from "./pages/ClientesSelecionados";
import { Toaster } from "sonner";

export default function AppShell() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes-selecionados" element={<ClientesSelecionados />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </>
  );
}
