// @flow

import { compose, withProps, withState } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withLocale } from '../../lib'


export default compose(
  withLocale,
  withProps(({ url: { query: { page, search } } }) => ({
    page: Math.max(parseInt(page || 1, 10), 1),
    search: search || '',
  })),
  withState('searchQuery', 'setSearchQuery', ({ search }) => search),
  graphql(gql(`
    query ($page: Int!, $search: String) {
      adminPages(page: $page, search: $search) {
        edges {
          _id
          tag
          code
          title
          preview
          description
          body
          section
          external_id
          status
          date
        }
        totalCount
      }
    }
  `), {
    options: ({ page, search }) => ({
      variables: { page, search }
    }),
  }),
  withProps(({ data: { adminPages: { edges, totalCount } } }) => ({
    pages: edges,
    count: totalCount
  })),
)
