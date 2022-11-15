import React from 'react';
import Box from '@mui/material/Box';

interface ContentLayoutProps {
  children: React.ReactNode;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <Box pb={4} pt={2}>
      {children}
    </Box>
  );
};
