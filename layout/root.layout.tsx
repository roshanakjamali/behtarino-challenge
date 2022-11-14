import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Container from '@mui/material/Container';

import theme from '../styles/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}


  