import styled from 'styled-components';
import { Character } from '@interfaces';
import CharacterCard from './CharacterCard';

const CharactersList = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.maxPageWidth};
  margin: 0 auto;
  padding: 0 16px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
  grid-gap: 15px;

  @media (width > 600px) {
    padding: 0 48px;
    grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  }
`;

type CharactersCardListProps = {
  characters: Character[];
};

const CharactersCardList = ({ characters }: CharactersCardListProps) => {
  return (
    <CharactersList>
      {characters?.map((character) => {
        return <CharacterCard character={character} key={character.id} />;
      })}
    </CharactersList>
  );
};

export default CharactersCardList;
