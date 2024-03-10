import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import CharactersCardList from '@components/CharactersCardList';
import SearchBar from '@components/SearchBar';
import useCharacters from '@hooks/useCharacters';

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
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, isError } = useCharacters(searchTerm);

  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      searchBar: { value: string };
    };
    setSearchTerm(target.searchBar.value);
  };

  return (
    <>
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
    </>
  );
};

export default CharactersListPage;
