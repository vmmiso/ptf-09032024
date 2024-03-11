import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('Renders App component', async () => {
  render(<App />);
  expect(await screen.findByText('0')).not.toBeNull();
});
