import styled from 'styled-components';
import MarvelLogo from '@assets/Marvel logo.svg';

const Header = styled.header`
  width: 100%;
  height: 84px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Container = styled.div`
  height: 84px;
  max-width: ${({ theme }) => theme.sizes.maxPageWidth};
  margin: 0 auto;
  padding: 0px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Navbar = () => {
  return (
    <Header>
      <Container>
        <img src={MarvelLogo} alt='Marvel logo' />
        <div style={{ backgroundColor: 'red', height: '20px', width: '20px' }} />
      </Container>
    </Header>
  );
};

export default Navbar;
