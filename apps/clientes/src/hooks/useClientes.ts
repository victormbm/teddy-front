import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useClientes() {
  return useQuery({
    queryKey: ['clientes'],
    queryFn: async () => {
      const { data } = await axios.get('https://boasorte.teddybackoffice.com.br/users');
      return data;
    },
  });
}
