import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFavsContext } from '@contexts/FavsContext';
import MarvelLogo from '@assets/Marvel logo.svg';
import FavIcon from './FavIcon';

const Header = styled.header`
  width: 100%;
  height: 84px;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

const ContainerNav = styled.nav`
  height: 100%;

  ul {
    height: 100%;
    max-width: ${({ theme }) => theme.sizes.maxPageWidth};
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    color: ${({ theme }) => theme.colors.red};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;

    display: flex;
    gap: 8px;
    align-items: center;
    text-decoration: none;
  }
`;

const Navbar = () => {
  const { favIds } = useFavsContext();

  return (
    <Header>
      <ContainerNav>
        <ul>
          <li>
            <Link to='/' aria-label='home'>
              <img src={MarvelLogo} alt='Marvel logo' />
            </Link>
          </li>
          <li>
            <Link to='/favorites' aria-label='favorites'>
              <FavIcon isFav />
              <span>{favIds.length}</span>
            </Link>
          </li>
        </ul>
      </ContainerNav>
    </Header>
  );
};

export default Navbar;
