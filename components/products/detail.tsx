import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { ProductProps } from '../../types/products';

import {
  Button,
  Rating,
  GridItemImage,
  StatisticsBox,
  StatisticsHeader,
} from './style';

const imageGridPros = { item: true, xs: 12, md: 4 };
const infoGridPros = { item: true, xs: 12, md: 8 };

const ProductDetail: React.FC<{ info: ProductProps }> = ({ info }) => {
  const {
    title,
    image,
    category,
    price,
    description,
    rating: { count, rate: initialRate },
  } = info;

  const [rate, setRate] = useState(initialRate);

  return (
    <Paper elevation={16} style={{ borderRadius: `12px` }}>
      <Grid container spacing={0} minHeight='80vh'>
        <Grid {...imageGridPros}>
          <GridItemImage>
            <Image src={image} alt={title} width={210} height={260} />
          </GridItemImage>
        </Grid>
        <Grid {...infoGridPros}>
          <Box padding={4} position='relative' height='100%'>
            <Grid container spacing={2} justifyContent='space-between'>
              <Grid item xs={12} sm={10}>
                <Typography variant='h5'>{title}</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Rating
                  size='small'
                  value={rate}
                  onChange={(event, newValue) => {
                    setRate(newValue || 0);
                  }}
                />
              </Grid>
            </Grid>

            <Typography variant='button' color='text.disabled'>
              {category}
            </Typography>
            <Typography variant='h6' color='error'>
              ${price}
            </Typography>
            <Box padding={3} />
            <Typography variant='h6' color='text.secondary'>
              Description
            </Typography>
            <Typography variant='subtitle2'>{description}</Typography>
            <Box padding={2} />
            <Box display='flex' gap={4}>
              <StatisticsHeader variant='h6'>
                RATE
                <br />
                <StatisticsBox component='span'>{rate}</StatisticsBox>
              </StatisticsHeader>
              <Divider orientation='vertical' flexItem />
              <StatisticsHeader variant='h6'>
                QTY
                <br />
                <StatisticsBox component='span'>({count})</StatisticsBox>
              </StatisticsHeader>
            </Box>
            <Box padding={2} />
            <Button variant='contained' LinkComponent={Link} href='/'>
              Back to home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetail;
