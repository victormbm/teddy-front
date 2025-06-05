type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  nomeCliente: string;
};

export function DeleteClienteModal({ isOpen, onClose, onConfirm, nomeCliente }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-[400px] shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Excluir cliente:</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <p className="mb-4">
          Você está prestes a excluir o cliente: <strong>{nomeCliente}</strong>
        </p>

        <button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          className="bg-orange-600 text-white w-full py-2 rounded hover:bg-orange-700"
        >
          Excluir cliente
        </button>
      </div>
    </div>
  );
}
