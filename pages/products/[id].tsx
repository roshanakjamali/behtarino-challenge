import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { ProductProps } from '../../types/products';
import { ContentLayout } from '../../layout/content.layout';
import ProductDetail from '../../components/products/detail';

import { getProduct } from '../../api/product';

import { useProduct } from '../../hooks/useProduct';

const Product: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: product, isLoading } = useProduct(id as string);

  if (!isLoading && !product)
    return <ContentLayout>An error has occurred</ContentLayout>;

  return (
    <>
      <Head>
        <title>{product!.title}</title>
        <meta name='description' content={product!.title} />
      </Head>

      <ContentLayout>
        <ProductDetail info={product!} />
      </ContentLayout>
    </>
  );
};

export async function getServerSideProps({
  query: { id },
}: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(['product', id], () => getProduct(id as string));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Product;
