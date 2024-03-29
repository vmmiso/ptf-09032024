import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FavsContextProvider } from '@contexts/FavsContext';
import CharacterDetailsPage from '@pages/CharacterDetailsPage';
import CharactersListPage from '@pages/CharactersListPage';
import Header from '@components/Header';
import { mainTheme } from './theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FavsContextProvider>
            <Header />
            <Routes>
              <Route path='/' element={<CharactersListPage />} />
              <Route path='/favorites' element={<CharactersListPage favorites />} />
              <Route path='character/:id' element={<CharacterDetailsPage />} />
              <Route path='*' element={<div>Not found</div>} />
            </Routes>
          </FavsContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
