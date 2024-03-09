import { ThemeProvider } from 'styled-components';
import Header from '@components/Header';
import { mainTheme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Header />
      Marvel App
    </ThemeProvider>
  );
};

export default App;
