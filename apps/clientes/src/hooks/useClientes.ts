import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'https://boasorte.teddybackoffice.com.br/users';



export function useClientes(page: number, limit: number = 16) {
  return useQuery({
    queryKey: ['clientes', page],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
      console.log('data', data);

      return data;
    },
    placeholderData: (prev) => prev,
  });
}

export function useCreateCliente() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (novoCliente: { name: string; salary: number; companyValuation: number }) =>
      axios.post(API_URL, novoCliente),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clientes'] });
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
