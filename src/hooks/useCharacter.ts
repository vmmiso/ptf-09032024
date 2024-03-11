import { useQuery } from '@tanstack/react-query';
import { api, getCredentials } from '@apis/marvel';
import { CharactersResponse } from '@interfaces/characters';

const fetchCharacter = async (id: string) => {
  const { data } = await api.get(`/public/characters/${id}`, {
    params: { ...getCredentials() },
  });
  return data;
};

const useCharacter = (id: string) => {
  return useQuery<CharactersResponse, Error>({
    queryKey: ['character', id],
    queryFn: () => fetchCharacter(id),
  });
};

export default useCharacter;
