import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { ContentLayout } from '../../layout/content.layout';
import ProductDetail from '../../components/products/detail';

import { getProduct } from '../../api/product';

import { useProduct } from '../../hooks/useProduct';

const Product: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: product } = useProduct(id as string);

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
  const product = await queryClient.fetchQuery(['product', id], () =>
    getProduct(id as string)
  );

  if (!product)
    return {
      notFound: true,
    };

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Product;
