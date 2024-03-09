import { ThemeProvider } from 'styled-components';
import Header from '@components/Header';
import { mainTheme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div>
        <Header />
        Marvel App
      </div>
    </ThemeProvider>
  );
};

export default App;
