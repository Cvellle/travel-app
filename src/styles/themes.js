// 1. Import `createTheme`
import { createTheme } from '@nextui-org/react';

// 2. Call `createTheme` and pass your custom values
const NextUiDefaultTheme = createTheme({
  type: 'light',
  theme: {
    fonts: {
      sans: '"Roboto", sans-serif',
    },
  },
});

export { NextUiDefaultTheme };
