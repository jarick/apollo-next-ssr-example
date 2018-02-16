// @flow

import React from 'react'
import ErrorPage from 'next/error'
import Head from 'next/head'
import type { $Response } from 'express';
import { View, ContentRow } from '../App'
import NotFound from './NotFound'


export default class extends React.Component<{ statusCode: number }> {
  static getInitialProps({ res, err }: { res: $Response, err?: Error & { statusCode?: number } }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { statusCode }
  }

  render() {
    return parseInt(this.props.statusCode, 10) === 404
      ? (
        <View>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700" rel="stylesheet" />
          </Head>
          <ContentRow>
            <NotFound />
          </ContentRow>
        </View>
      )
      : <ErrorPage statusCode={this.props.statusCode} />
  }
}
