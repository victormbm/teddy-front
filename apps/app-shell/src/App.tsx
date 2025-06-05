import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clientes from "clientes/src/App";
import Home from "./pages/Home";

export default function AppShell() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}
