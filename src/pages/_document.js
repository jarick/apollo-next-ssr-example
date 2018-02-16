import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang="ru">
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700" rel="stylesheet" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          <NextScript />
        </body>
      </html>
    )
  }
}