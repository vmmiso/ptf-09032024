import useCharacters from '@hooks/useCharacters';

const CharactersListPage = () => {
  const resp = useCharacters();
  console.log(resp);
  return <div>CharactersListPage</div>;
};

export default CharactersListPage;
