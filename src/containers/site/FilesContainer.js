// @flow

import {compose, withProps} from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { setQueryStatus } from '../../lib'


export default compose(
  setQueryStatus(),
  withProps(({ url: { query: { page, path } } }) => ({
    page: Math.max(parseInt(page, 10) || 1, 1),
    path: path || ''
  })),
  graphql(gql`
    query ($path: String!, $page: Int!) {
      files(path: $path, page: $page) {
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
  `, {
    options: ({ page, path }) => ({ variables: { page, path } })
  }),
  withProps(({ data: { files: { edges, totalCount } } }) => ({ files: edges, count: totalCount }))
)
