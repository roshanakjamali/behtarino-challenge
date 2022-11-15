import { styled } from '@mui/material/styles';

import MUIRating from '@mui/material/Rating';
import MUIBox from '@mui/material/Box';
import MUITypography from '@mui/material/Typography';
import MUIButton from '@mui/material/Button';

export const CardImage = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2, 2),
  maxHeight: 240,
  height: 240,
  display: 'flex',
  justifyContent: 'center',
}));

export const GridItemImage = styled('div')(({ theme }) => ({
  height: '100%',
  maxHeight: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: `12px 0 0 12px`,
  backgroundImage: `linear-gradient(0deg, #44c9ca, #6bfcc9)`,

  '@media(max-width:900px)': {
    borderRadius: `12px 12px 0 0`,
  },

  '& img': {
    width: 'auto',
    maxWidth: '70%',
    margin: theme.spacing(5, 0),

    '@media(max-width:900px)': {
      maxWidth: '200px',
      margin: theme.spacing(2, 0),
    },
  },
}));

export const Rating = styled(MUIRating)(({ theme }) => ({
  marginTop: 8,
  '& .MuiRating-iconFilled': {
    color: theme.palette.error.main,
  },
  '& 	.MuiRating-iconEmpty': {
    color: theme.palette.text.disabled,
  },
}));

export const StatisticsBox = styled(MUIBox)(({ theme }) => ({
  display: 'inline-block',
  color: theme.palette.text.disabled,
  paddingTop: theme.spacing(1),
}));

export const StatisticsHeader = styled(MUITypography)(({ theme }) => ({
  display: 'inline',
  color: theme.palette.text.secondary,
  align: 'center',
}));

export const Button = styled(MUIButton)(({ theme }) => ({
  position: 'absolute',
  right: 32,
  bottom: 32,
}));
