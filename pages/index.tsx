import Head from 'next/head';
import Image from 'next/image';

import { ProductsProps } from '../types/products';
import Products from '../components/products/collection';

import { HeaderLayout } from '../layout/header.layout';
import { ContentLayout } from '../layout/content.layout';

import Logo from '../assets/images/logo.svg';

export default function Home({ products }: { products: ProductsProps }) {
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

export async function getServerSideProps(): Promise<{
  props: {
    products: ProductsProps;
  };
}> {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
