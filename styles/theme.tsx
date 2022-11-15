import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          backgroundColor: '#eaeaea',
        },
      }),
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundImage: `linear-gradient(0deg, #ff4665, #ff846c);`,
          fontStyle: 'normal',
        },
      },
    },
  },
  palette: {
    text: {
      primary: '#565656',
      secondary: '#727272',
      disabled: '#cbcbcb',
    },
    error: {
      main: '#e48484',
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.04rem',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    button: {
      fontStyle: 'italic',
    },
    subtitle2: {
      color: '#c3c3c3',
    },
  },
});
export default theme;
