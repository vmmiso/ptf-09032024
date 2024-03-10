import CharactersCardList from '@components/CharactersCardList';
import useCharacters from '@hooks/useCharacters';

const CharactersListPage = () => {
  const { data, isLoading, isError } = useCharacters();

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) return <div>Error</div>;

  return <CharactersCardList characters={data.data.results} />;
};

export default CharactersListPage;
