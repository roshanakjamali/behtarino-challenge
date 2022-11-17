import { useQuery, UseQueryResult } from '@tanstack/react-query';
import * as api from '../api/product';
import { ProductProps, ProductsProps } from '../types/products';

export const useAllProduct = (): UseQueryResult<ProductsProps> => {
  return useQuery(['products'], () => api.getAllProduct());
};

export const useProduct = (id: string): UseQueryResult<ProductProps> => {
  return useQuery(['product', id], () => api.getProduct(id));
};
