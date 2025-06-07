import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'https://boasorte.teddybackoffice.com.br/users';

type Cliente = {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
};


export function useClientes(page: number, limit: number) {

  return useQuery<Cliente[]>({
    queryKey: ['clientes', page, limit],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}?limit=${limit}&page=${page}`);
      return data?.clients ?? []; 
    },
    placeholderData: (prev) => (page === 1 ? prev : undefined),
  });
}


export function useTodosClientes() {
  return useQuery({
    queryKey: ['todos-clientes'],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}?limit=9999`);
      return data.clients ?? [];
    },
  });
}


export function useCreateCliente() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (novoCliente: { name: string; salary: number; companyValuation: number }) =>
      axios.post(API_URL, novoCliente),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clientes'] });
      queryClient.invalidateQueries({ queryKey: ['todos-clientes'] });
    },
  });
}

export function useUpdateCliente() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...rest }: { id: number; name: string; salary: number; companyValuation: number }) =>
      axios.patch(`${API_URL}/${id}`, rest),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clientes'] });
    },
  });
}

export function useDeleteCliente() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clientes'] });
    },
  });
}
