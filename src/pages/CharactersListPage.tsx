import styled from 'styled-components';
import CharactersCardList from '@components/CharactersCardList';
import SearchBar from '@components/SearchBar';
import useCharacters from '@hooks/useCharacters';
import { useSearchParamsState } from '@hooks/useSearchParamsState';

const Main = styled.main`
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.maxPageWidth};
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: 40px;
`;

const SearchWrapper = styled.div`
  height: 77px;
  padding-top: 24px;
  padding-bottom: 24px;

  @media (width > 440px) {
    padding-top: 48px;
  }
`;

const SearchResultsLabel = styled.span`
  font-size: 12px;
`;

const CharactersListPage = () => {
  const [searchTerm, setSearchTerm] = useSearchParamsState('search', '');
  const { data, isLoading, isError } = useCharacters(searchTerm);

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      searchBar: { value: string };
    };
    setSearchTerm(target.searchBar.value);
  };

  return (
    <Main>
      <SearchWrapper>
        <SearchBar handleSubmit={handleSubmitSearch} />
        {!isLoading && (
          <SearchResultsLabel>{data?.data?.results?.length || 0} RESULTS</SearchResultsLabel>
        )}
      </SearchWrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError || !data ? (
        <div>Error</div>
      ) : (
        <CharactersCardList characters={data.data.results} />
      )}
    </Main>
  );
};

export default CharactersListPage;
