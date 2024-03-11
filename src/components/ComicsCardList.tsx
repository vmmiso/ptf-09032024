import styled from 'styled-components';
import { Comic } from '@interfaces/comics';

const ComicsList = styled.div`
  width: 100%;
  height: 369px;
  display: flex;
  gap: 16px;
  overflow-x: auto;
`;

const ComicCard = styled.article`
  width: 179px;
  min-width: 179px;
  height: 340px;

  img {
    width: 100%;
    aspect-ratio: 2/3;
  }

  h5 {
    font-weight: 700;
    margin-top: 8px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 12px;
    margin-top: 8px;
  }
`;

type ComicsCardListProps = {
  comics: Comic[];
};

const ComicsCardList = ({ comics }: ComicsCardListProps) => {
  return (
    <ComicsList>
      {comics?.map((comic) => {
        return (
          <ComicCard key={comic.id}>
            <img
              src={comic.thumbnail.path?.concat('.', comic.thumbnail.extension)}
              alt={`${comic.title} thumbnail`}
            />
            <h5 title={comic.title}>{comic.title}</h5>
            <p>{comic.dates?.find((date) => date.type === 'onsaleDate')?.date?.substring(0, 4)}</p>
          </ComicCard>
        );
      })}
    </ComicsList>
  );
};

export default ComicsCardList;
