import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFavsContext } from '@contexts/FavsContext';
import { Character } from '@interfaces/characters';
import FavIcon from './FavIcon';

const CharacterCardLink = styled(Link)`
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-top: 130%;
  }

  img {
    height: 75%;
    width: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
  }
`;

const CharacterData = styled.div`
  width: 100%;
  height: 25%;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  border-top: 5px solid ${({ theme }) => theme.colors.red};

  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.red} 50%,
    ${({ theme }) => theme.colors.black} 50%
  );
  background-size: auto 220%;
  background-position: 0 100%;
  transition: background-position 0.4s;

  clip-path: polygon(0 0, 100% 0, 100% 80%, 94% 100%, 0 100%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8.5%;

  svg {
    color: ${({ theme }) => theme.colors.red};
  }

  ${CharacterCardLink}:hover & {
    background-position: 0 0;

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  button {
    background: none;
    padding-top: 5px;
    border: none;
    cursor: pointer;
  }
`;

const CharacterName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 14px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 85%;
  display: inline-block;
`;

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { favIds, handleFavorites } = useFavsContext();

  const handleFavoritesClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleFavorites(character.id);
  };

  return (
    <CharacterCardLink to={`/character/${character.id}`}>
      <img
        src={character.thumbnail.path?.concat('.', character.thumbnail.extension)}
        alt={`${character.name} thumbnail`}
      />
      <CharacterData>
        <CharacterName title={character.name}>{character.name}</CharacterName>
        <button onClick={handleFavoritesClick} aria-label='handle favorite'>
          <FavIcon size='12' isFav={favIds?.includes(character.id)} />
        </button>
      </CharacterData>
    </CharacterCardLink>
  );
};

export default CharacterCard;
