import styled from 'styled-components';
import { useFavsContext } from '@contexts/FavsContext';
import CharactersCardList from '@components/CharactersCardList';
import SearchBar from '@components/SearchBar';
import Spinner from '@components/Spinner';
import useCharacters from '@hooks/useCharacters';
import { useSearchParamsState } from '@hooks/useSearchParamsState';

const Main = styled.main`
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.maxPageWidth};
  margin: 0 auto;
  padding: 24px 16px 0 16px;
  margin-bottom: 40px;

  h2 {
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media (width > 440px) {
    padding: 48px 16px 0 16px;
  }
`;

const SearchWrapper = styled.div`
  height: 77px;
  padding-bottom: 24px;
`;

const SearchResultsLabel = styled.span`
  font-size: 12px;
`;

type CharactersListPageProps = {
  favorites?: boolean;
};

const CharactersListPage = ({ favorites = false }: CharactersListPageProps) => {
  const [searchTerm, setSearchTerm] = useSearchParamsState('search', '');
  const { data, isLoading, isError } = useCharacters(searchTerm);
  const { favIds } = useFavsContext();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      searchBar: { value: string };
    };
    setSearchTerm(target.searchBar?.value);
  };

  const characters =
    (favorites
      ? data?.data?.results?.filter((character) => favIds.includes(character.id))
      : data?.data?.results) || [];

  return (
    <Main>
      {favorites && <h2>FAVORITES</h2>}
      <SearchWrapper>
        <SearchBar handleSubmit={handleSubmitSearch} />
        {!isLoading && <SearchResultsLabel>{characters.length || 0} RESULTS</SearchResultsLabel>}
      </SearchWrapper>
      {isLoading ? (
        <Spinner />
      ) : isError || !data ? (
        <div>Error</div>
      ) : (
        <CharactersCardList characters={characters} />
      )}
    </Main>
  );
};

export default CharactersListPage;
