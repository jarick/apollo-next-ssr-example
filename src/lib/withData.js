// @flow

import withRedux from 'next-redux-wrapper'
import I18n from 'redux-i18n'
import type { $Request, $Response } from 'express'
import React from 'react'
import Router from 'next/router'
import { ApolloLink } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import { object } from 'prop-types'
import { Provider } from 'react-redux'
import type { Store } from '../types'
import Error from '../components/site/NotFound'
import { showFlush } from './flush'


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

type Context = { store: Store, req?: $Request, res: $Response, query: {}, pathname: string }
// eslint-disable-next-line
type PageClass = any // Class<React.Component<*, *>> & { getInitialProps?: (ctx: Context) => Promise<*> }

class NotFoundError extends Error {
  code: string
  constructor(message) {
    super(message);
    this.code = 'ENOENT';
  }
}

type Options = {
  uri?: string,
  translations?: { [key: string]: {} },
  lang?: string
}

const WithDataComponent = (opt: Options = {}) => (Page: PageClass) => {
  const { uri = '/graphql', translations = { en: {} }, lang = 'en' } = opt

  type Props = {
    apollo: { data: * },
    store: Store,
    cookie: string,
    statusCode?: number
  }

  return class WithData extends React.Component<Props> {

    static contextTypes = {
      store: object
    }

    static getInitialProps = (ctx: Context) => {
      const { store, res, req, pathname, query } = ctx
      let domain = 'http://localhost:3000'
      if (res) {
        domain = process.env.DOMAIN || domain
      }

      const client = new ApolloClient({
        link: ApolloLink.from([
          errorLink,
          new HttpLink({
            uri: res ? `${domain}${uri}` : uri,
            credentials: 'same-origin',
            headers: {
              Cookie: req ? req.header('Cookie') : ''
            }
          }),
        ]),
        cache: new InMemoryCache(),
        connectToDevTools: process.browser && false,
        ssr: !(process.browser && false) // fix flow
      })
      const App = (
        <Provider store={store}>
          <I18n translations={translations} initialLang={lang}>
            <ApolloProvider client={client} store={store}>
              <Page url={{ pathname, query }} />
            </ApolloProvider>
          </I18n>
        </Provider>
      )

      return getDataFromTree(App)
        .then(() => Page.getInitialProps ? Page.getInitialProps(ctx) : {})
        .then((props: Object) => {
          const { statusCode, replace } = store.getState().queryStatus
          if (statusCode === 302 && replace) {
            if (res) {
              res.writeHead(302, { Location: replace })
              res.end()
              res.finished = true
            } else {
              Router.replace(replace)
            }
          }
          if (statusCode === 404) {
            if (res) {
              throw new NotFoundError()
            }
          }

          if (ctx.isServer) {
            Head.rewind()
          }

          return {
            ...props,
            statusCode,
            cookie: ctx.req ? ctx.req.header('Cookie') : '',
            apollo: { data: client.cache.extract() }
          }
        })
    }

    render() {
      const { statusCode } = this.props
      if (statusCode && parseInt(statusCode, 10) >= 299) {
        return <Error statusCode={statusCode} />
      }

      const { apollo: { data }, store, cookie, ...props } = this.props
      const client = new ApolloClient({
        link: ApolloLink.from([
          errorLink,
          new HttpLink({
            uri,
            credentials: 'same-origin',
            headers: { Cookie: cookie }
          })
        ]),
        cache: new InMemoryCache().restore(data),

        ssr: false,
      })

      return (
        <I18n translations={translations} initialLang={lang}>
          <ApolloProvider client={client} store={store}>
            <Page {...props} />
          </ApolloProvider>
        </I18n>
      )
    }
  }
}

export default (initStore: () => Store, opt: Options = {}) => (Page: PageClass) => (
  withRedux(initStore)(WithDataComponent(opt)(showFlush(Page)))
)
