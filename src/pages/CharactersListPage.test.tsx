import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { mainTheme } from 'src/theme';
import { ThemeProvider } from 'styled-components';
import { beforeEach, expect, test } from 'vitest';
import { FavsContextProvider } from '@contexts/FavsContext';
import CharactersListPage from './CharactersListPage';

const queryClient = new QueryClient();

beforeEach(() => {
  render(
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FavsContextProvider>
            <CharactersListPage />
          </FavsContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>,
  );
});

test('Submit input search', async () => {
  const inputSearch = await screen.findByPlaceholderText('Search a character...');
  expect(inputSearch).not.toBeNull();
  fireEvent.change(inputSearch, { target: { value: 'Hulk' } });
  const submitSearch = await screen.findByRole('submit-search');
  fireEvent.click(submitSearch);
});
