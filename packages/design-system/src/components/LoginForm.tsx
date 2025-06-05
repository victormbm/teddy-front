import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

type Props = {
  onSubmit: (name: string) => void;
};

export const LoginForm = ({ onSubmit }: Props) => {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 text-center">
        Olá, seja bem-vindo!
      </h1>

      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o seu nome:"
        className="mb-4"
      />

      <Button onClick={() => onSubmit(name)}>Entrar</Button>
    </div>
  );
};
