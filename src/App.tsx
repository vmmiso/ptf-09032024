import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import CharactersListPage from '@pages/CharactersListPage';
import Header from '@components/Header';
import { mainTheme } from './theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <CharactersListPage />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
