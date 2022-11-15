import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface HeaderLayoutProps {
  children: React.ReactNode;
}

export const HeaderLayout: React.FC<HeaderLayoutProps> = ({ children }) => {
  return (
    <Box pt={2}>
      <Typography variant='h3'>{children}</Typography>
    </Box>
  );
};
