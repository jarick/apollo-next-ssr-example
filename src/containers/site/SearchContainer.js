// @flow

import { compose, withProps } from 'recompose'
import { reduxForm } from 'redux-form'
import { graphql } from 'react-apollo'
import Router from 'next/router'
import gql from 'graphql-tag'

type FormData = {
  search: string
}

export default compose(
  withProps(({ url: { query: { page, search } } }) => ({
    page: Math.max(parseInt(page, 10) || 1, 1),
    search: search || '',
  })),
  graphql(gql`
    query ($text: String!, $tag: String!, $page: Int!) {
      search(text: $text, page: $page) {
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
      menu(tag: $tag) {
        _id
        tag
        code
        label
        url
        exact
        external
      }
    }
  `, {
    options: ({ page, search }) => ({ variables: { tag: 'news', text: search, page } })
  }),
  withProps(({ data: { search: { edges, totalCount }, menu } }) => ({
    news: edges.map(item => {
      const date = new Date(item.date)

      return {
        ...item,
        date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
      }
    }),
    count: totalCount,
    menu
  })),
  withProps(({ search }) => ({ initialValues: { search } })),
  reduxForm({
    form: 'search',
    onSubmit(values: FormData) {
      const { search } = values

      Router.push(`/news/search?search=${search}`)
    },
    validate(values) {
      const { search } = values
      const errors = {}

      if (!search || search.length < 3) {
        errors.search = 'Введите минимум 3 буквы'
      }

      return errors
    },
  }),
)
