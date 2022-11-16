import axios from '../lib/axios';

export const getProduct = async (id: string) => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};
