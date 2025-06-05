import { useNavigate } from "react-router-dom";
import { LoginForm } from "design-system";

export default function Home() {
  const navigate = useNavigate();

  const handleLogin = (name: string) => {
    navigate("/clientes", { state: { name } });
  };

  return <LoginForm onSubmit={handleLogin} />;
}
