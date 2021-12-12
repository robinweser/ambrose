import React from 'react'
import Head from 'next/head'

import AppWrapper from '../components/AppWrapper'

export default function App({ Component, pageProps, renderer }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <AppWrapper renderer={renderer}>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  )
}
