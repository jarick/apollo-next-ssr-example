// @flow

import { compose, withProps, withState } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { parseSort, withLocale } from '../../lib'


export default compose(
  withLocale,
  withProps(({ url: { query: { page, sort, search } } }) => ({
    page: Math.max(parseInt(page || 1, 10), 1),
    sort: parseSort(sort || '', ['date', 'title'], 'date', -1),
    search: search || '',
  })),
  withState('searchQuery', 'setSearchQuery', ({ search }) => search),
  graphql(gql(`
    query ($page: Int!, $sortByDate: Int, $sortByTitle: Int, $search: String) {
      adminNews(page: $page, sortByDate: $sortByDate, sortByTitle: $sortByTitle, search: $search) {
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
    options: ({ page, sort, search }) => ({
      variables: {
        page,
        sortByDate: sort.key === 'date' && sort.order,
        sortByTitle: sort.key === 'title' && sort.order,
        search
      }
    }),
  }),
  withProps(({ data: { adminNews: { edges, totalCount } } }) => ({
    news: edges.map(item => {
      const date = new Date(item.date)
      const dd = `${date.getDate()}`.padStart(2, '0')
      const mm = `${date.getMonth() + 1}`.padStart(2, '0')
      const yy = `${date.getFullYear()}`

      return {
        ...item,
        date: `${dd}.${mm}.${yy}`,
      }
    }),
    count: totalCount
  })),
)
