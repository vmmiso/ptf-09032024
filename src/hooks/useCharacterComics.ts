import { useQuery } from '@tanstack/react-query';
import { api, getCredentials } from '@apis/marvel';
import { ComicsResponse } from '@interfaces/comics';

const fetchCharacterComics = async (id: string, limit = 20) => {
  const { data } = await api.get(`/public/characters/${id}/comics`, {
    params: {
      ...getCredentials(),
      orderBy: '-onsaleDate',
      limit,
    },
  });
  return data;
};

const useCharacterComics = (id: string, limit?: number) => {
  return useQuery<ComicsResponse, Error>({
    queryKey: ['charactersComics', id, limit],
    queryFn: () => fetchCharacterComics(id, limit),
  });
};

export default useCharacterComics;
