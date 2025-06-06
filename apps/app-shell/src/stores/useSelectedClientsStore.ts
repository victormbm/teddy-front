import { create } from 'zustand';

interface Cliente {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
}

interface SelectedClientsState {
  selectedClients: Cliente[];
  addClient: (client: Cliente) => void;
  removeClient: (id: number) => void;
  clearClients: () => void;
}

export const useSelectedClientsStore = create<SelectedClientsState>((set) => ({
  selectedClients: [],
  addClient: (client) =>
    set((state) => ({
      selectedClients: [...state.selectedClients, client],
    })),
  removeClient: (id) =>
    set((state) => ({
      selectedClients: state.selectedClients.filter((c) => c.id !== id),
    })),
  clearClients: () => set({ selectedClients: [] }),
}));
