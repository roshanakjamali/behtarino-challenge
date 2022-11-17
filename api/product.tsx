import axios from '../lib/axios';

export const getAllProduct = async () => {
  const { data } = await axios.get(`/products`);
  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};
