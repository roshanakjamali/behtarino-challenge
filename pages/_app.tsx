import { useState } from 'react';
import type { AppProps } from 'next/app';

import { RootLayout } from '../layout/root.layout';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { config } from '../lib/react-query-config';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(config));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}
