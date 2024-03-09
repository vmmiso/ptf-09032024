import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      red: string;
      grey: string;
    };
    sizes: {
      maxPageWidth: string;
    };
  }
}
