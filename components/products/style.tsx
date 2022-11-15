import { styled } from '@mui/material/styles';

export const CardImage = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2, 2),
  maxHeight: 240,
  height: 240,
  display: 'flex',
  justifyContent: 'center',
}));
