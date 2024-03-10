import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CharactersListPage from '@pages/CharactersListPage';
import Header from '@components/Header';
import { mainTheme } from './theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<CharactersListPage />} />
              <Route path='*' element={<div>Not found</div>} />
            </Routes>
          </main>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
