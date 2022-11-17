import Head from 'next/head';
import Image from 'next/image';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { getAllProduct } from '../api/product';
import { useAllProduct } from '../hooks/useProduct';

import { HeaderLayout } from '../layout/header.layout';
import { ContentLayout } from '../layout/content.layout';
import Products from '../components/products/collection';

import Logo from '../assets/images/logo.svg';

export default function Home() {
  const { data: products = [] } = useAllProduct();

  return (
    <>
      <Head>
        <title>FK Store</title>
        <meta name='description' content='Buy Everything You Need!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeaderLayout>
        <Image src={Logo} alt='Behtarino' width={200} />
      </HeaderLayout>

      <ContentLayout>
        <Products collection={products} />
      </ContentLayout>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(['products'], () => getAllProduct());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
