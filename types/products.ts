interface RatingProps {
  rate: number;
  count: number;
}

export interface ProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: RatingProps;
}

export type ProductsProps = ProductProps[];
