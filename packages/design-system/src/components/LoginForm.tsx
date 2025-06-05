import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

type Props = {
  onSubmit: (name: string) => void;
};

export const LoginForm = ({ onSubmit }: Props) => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Olá, seja bem-vindo!</h1>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o seu nome:"
      />
      <div className="mt-4">
        <Button onClick={() => onSubmit(name)}>Entrar</Button>
      </div>
    </div>
  );
};
