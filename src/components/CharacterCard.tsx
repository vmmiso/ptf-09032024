import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Character } from '@interfaces';

const CharacterCardLink = styled(Link)`
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-top: 130%;
  }
`;

const CharacterImg = styled.img`
  height: 75%;
  width: 100%;
  position: absolute;
  top: 0;
  object-fit: cover;
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

  ${CharacterCardLink}:hover & {
    background-position: 0 0;
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
  return (
    <CharacterCardLink to={`/character/${character.id}`}>
      <CharacterImg
        src={character.thumbnail.path?.concat('.', character.thumbnail.extension)}
        alt={`${character.name} thumbnail`}
      />
      <CharacterData>
        <CharacterName title={character.name}>{character.name}</CharacterName>
        <div
          style={{
            height: '12px',
            width: '12px',
            backgroundColor: 'red',
          }}
        />
      </CharacterData>
    </CharacterCardLink>
  );
};

export default CharacterCard;
