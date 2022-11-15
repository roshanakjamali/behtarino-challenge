import React from 'react';

import Grid from '@mui/material/Grid';

import { ProductCard } from './collection.item';
import { ProductsProps } from '../../types/products';

const gridProps = { item: true, xs: 9, sm: 6, md: 4, lg: 3 };

const ProductsCollection: React.FC<{ collection: ProductsProps }> = ({
  collection,
}) => {
  return (
    <Grid container spacing={2} justifyContent='center'>
      {collection.map((product) => (
        <Grid {...gridProps} key={product.id}>
          <ProductCard data={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsCollection;
