import { useQuery, UseQueryResult } from '@tanstack/react-query';
import * as api from '../api/product';
import { ProductProps } from '../types/products';

export const useProduct = (id: string): UseQueryResult<ProductProps> => {
  return useQuery(['product', id], () => api.getProduct(id));
};
