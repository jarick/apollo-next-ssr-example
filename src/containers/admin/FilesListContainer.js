// @flow

import { compose, withProps, withState } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withLocale } from '../../lib'


export default compose(
  withLocale,
  withProps(({ url: { query: { page, search, path } } }) => ({
    page: Math.max(parseInt(page || 1, 10), 1),
    search: search || '',
    path: path || '',
  })),
  withState('searchQuery', 'setSearchQuery', ({ search }) => search),
  graphql(gql(`
    query ($page: Int!, $search: String, $path: String!) {
      adminFiles(page: $page, path: $path, search: $search) {
        edges {
          _id
          tag
          path
          name
          url
        }
        totalCount
      }
    }
  `), {
    options: ({ page, search, path }) => ({
      variables: { page, search, path }
    }),
  }),
  withProps(({ data: { adminFiles: { edges, totalCount } } }) => ({
    files: edges,
    count:   totalCount
  })),
)
