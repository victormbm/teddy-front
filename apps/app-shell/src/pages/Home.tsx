import { LoginForm } from "design-system";

export default function Home() {
  const handleLogin = (name: string) => {
    console.log("Usuário:", name);
    
  };

  return <LoginForm onSubmit={handleLogin} />;
}
