import React from 'react';
import Image from 'next/image';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

import { ProductProps } from '../../types/products';
import { CardImage } from './style';

export const ProductCard: React.FC<{ data: ProductProps }> = ({
  data: product,
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <CardImage>
            <Image
              src={product.image}
              alt={product.title}
              width='200'
              height='210'
            />
          </CardImage>
          <Typography variant='body2' component='div' noWrap>
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
