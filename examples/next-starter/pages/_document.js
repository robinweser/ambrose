import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { renderToNodeList } from 'react-fela'

import createFelaRenderer from '../styling/createFelaRenderer'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const renderer = createFelaRenderer()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} renderer={renderer} />,
      })

    const initialProps = await Document.getInitialProps(ctx)
    const styles = renderToNodeList(renderer)

    return {
      ...initialProps,
      styles: [...initialProps.styles, ...styles],
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
