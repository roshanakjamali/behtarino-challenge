import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';

import { ProductProps } from '../../types/products';
import { ContentLayout } from '../../layout/content.layout';
import ProductDetail from '../../components/products/detail';

const Product: React.FC<{ product: ProductProps }> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name='description' content={product.title} />
      </Head>

      <ContentLayout>
        <ProductDetail info={product} />
      </ContentLayout>
    </>
  );
};

export async function getServerSideProps({
  query: { id },
}: GetServerSidePropsContext) {
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  return {
    props: {
      product,
    },
  };
}

export default Product;
