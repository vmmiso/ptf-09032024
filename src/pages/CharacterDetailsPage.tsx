import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ComicsCardList from '@components/ComicsCardList';
import useCharacter from '@hooks/useCharacter';
import useCharacterComics from '@hooks/useCharacterComics';

const Main = styled.main`
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.maxPageWidth};
  margin: 0 auto;
`;

const DetailsSection = styled.section`
  width: 100%;
  height: 610px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.black};

  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0px 100%);

  @media (1000px >= width > 700px) {
    height: 278px;
  }

  @media (width > 1000px) {
    height: 320px;
  }
`;

const DetailsWrapper = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxDetailsPageWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (width > 700px) {
    flex-direction: row;
    gap: 32px;
  }

  img {
    height: 380px;
    aspect-ratio: 1/1;
    object-fit: cover;

    @media (width > 700px) {
      height: 100%;
    }
  }
`;

const Sect = styled.div`
  color: ${({ theme }) => theme.colors.white};
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 24px;
  flex: auto;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  h2 {
    font-size: 32px;
    line-height: 36px;
    font-weight: 700;
    text-transform: uppercase;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (width > 700px) {
      font-size: 40px;
      line-height: 47px;
    }
  }
`;

const ComicsSection = styled.section`
  max-width: ${({ theme }) => theme.sizes.maxDetailsPageWidth};
  margin: 48px auto 0 auto;
  padding: 0 16px;

  @media (width > 992px) {
    padding: 0;
  }

  h4 {
    margin-bottom: 24px;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
  }
`;

const CharacterDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useCharacter(id || '404');
  const { data: data2 } = useCharacterComics(id || '404');

  const character = data?.data.results[0];
  const comics = data2?.data.results;

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) return <div>Error</div>;

  return (
    <Main>
      <DetailsSection>
        <DetailsWrapper>
          <img
            src={character?.thumbnail?.path?.concat(
              '.',
              data?.data.results[0]?.thumbnail.extension,
            )}
            alt={`${character?.name} thumbnail`}
          />
          <Sect>
            <div>
              <h2 title={character?.name}>{character?.name}</h2>
              <span>XX</span>
            </div>
            <p>{character?.description}</p>
            <div />
          </Sect>
        </DetailsWrapper>
      </DetailsSection>
      {comics && comics.length > 0 && (
        <ComicsSection>
          <h4>COMICS</h4>
          <ComicsCardList comics={comics} />
        </ComicsSection>
      )}
    </Main>
  );
};

export default CharacterDetailsPage;
