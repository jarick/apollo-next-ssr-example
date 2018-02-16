// @flow

import {compose, withProps, withState} from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


export default compose(
  withState('isOpen', 'setOpen', false),
  graphql(gql`
    query ($code: String!, $tag: String!) {
      template(code: $code) {
        _id
        code
        name
        phone
        thesis
        email
        footer
      }
      menu(tag: $tag) {
        _id
        code
        label
        url
        exact
        external
      }
    }
  `, {
    options: () => ({ variables: { code: 'main', tag: 'main' } })
  }),
  withProps(({ data: { template, menu } }) => ({
    template: template || {},
    menu: menu || [],
  })),
)
