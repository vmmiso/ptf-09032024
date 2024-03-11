import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import CharacterDetailsPage from '@pages/CharacterDetailsPage';
import CharactersListPage from '@pages/CharactersListPage';
import Header from '@components/Header';
import { mainTheme } from './theme';

const Footer = styled.footer`
  height: 50px;
`;

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<CharactersListPage />} />
            <Route path='character/:id' element={<CharacterDetailsPage />} />
            <Route path='*' element={<div>Not found</div>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
