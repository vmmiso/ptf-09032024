import { useQuery } from '@tanstack/react-query';
import { api, getCredentials } from '@apis/marvel';
import { CharactersResponse } from '@interfaces';

const fetchCharacters = async (name?: string, limit?: number) => {
  // const { ts, apiKey, hash } = getCredentials();
  const { data } = await api.get(`/public/characters`, {
    params: { ...getCredentials(), nameStartsWith: name, limit },
  });
  return data;
};

const useCharacters = (name?: string, limit?: number) => {
  return useQuery<CharactersResponse, Error>({
    queryKey: ['characters', name, limit],
    queryFn: () => fetchCharacters(name, limit),
  });
};

export default useCharacters;
