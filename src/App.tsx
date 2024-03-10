import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import CharacterDetailsPage from '@pages/CharacterDetailsPage';
import CharactersListPage from '@pages/CharactersListPage';
import Header from '@components/Header';
import { mainTheme } from './theme';

const Main = styled.main`
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.maxPageWidth};
  margin: 0 auto;
  padding: 0 16px;

  @media (width > 600px) {
    padding: 0 48px;
  }
`;

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Main>
            <Routes>
              <Route path='/' element={<CharactersListPage />} />
              <Route path='character/:id' element={<CharacterDetailsPage />} />
              <Route path='*' element={<div>Not found</div>} />
            </Routes>
          </Main>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
