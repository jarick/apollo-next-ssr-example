// @flow

import { compose, withProps } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


export default compose(
  graphql(gql`
    query ($tag: String!, $code: String!) {
      page(tag: $tag, code: $code) {
        title
        description
        body
      }
    }
  `, {
    options: ({ pageCode }) => ({ variables: { code: pageCode, tag: 'page' } })
  }),
  withProps(({ data: { page } }) => ({ page: page || {} })),
)
