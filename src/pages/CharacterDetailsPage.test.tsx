import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Params } from 'react-router-dom';
import { mainTheme } from 'src/theme';
import { ThemeProvider } from 'styled-components';
import { beforeEach, expect, test, vi } from 'vitest';
import { FavsContextProvider } from '@contexts/FavsContext';
import CharacterDetailsPage from './CharacterDetailsPage';

const queryClient = new QueryClient();

vi.mock('react-router-dom', () => ({
  useParams: (): Readonly<Params<string>> => ({ id: '1009351' }),
  BrowserRouter: vi.fn().mockImplementation((props) => props.children),
}));

beforeEach(() => {
  render(
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FavsContextProvider>
            <CharacterDetailsPage />
          </FavsContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>,
  );
});

test('Render character details page', async () => {
  await waitFor(async () => expect(await screen.findByText('Hulk')).not.toBeNull());
  const characterComic = await screen.findByText('Incredible Hulk (2023) #11');
  expect(characterComic).not.toBeNull();
});
