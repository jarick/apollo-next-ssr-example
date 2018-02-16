// @flow

import { compose, withProps, branch, renderNothing } from 'recompose'
import invert from 'lodash/invert'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { setQueryStatus } from '../../lib'
import { mapSectionCode } from '../../constants/site/sections'


const invertMapSectionCode = invert(mapSectionCode)
const listOfSectionCode = Object.values(mapSectionCode)

export default compose(
  setQueryStatus(),
  withProps(({ url: { query: { page, section, id }, pathname } }) => ({
    page: Math.max(parseInt(page, 10) || 1, 1),
    section,
    id,
    pathname
  })),
  withProps(({ section, setQueryStatus }) => {
    let sectionCode

    if (!section) {
      sectionCode = null
    }
    else if (listOfSectionCode.includes(section)) {
      sectionCode = parseInt(invertMapSectionCode[section], 10)
    }
    else {
      sectionCode = false
      setQueryStatus(404)
    }

    return { sectionCode }
  }),
  branch(({ sectionCode }) => sectionCode === false,
    renderNothing,
    branch(
      ({ id }) => !id,
      compose(
        graphql(gql`
          query ($section: Int, $page: Int!, $tag: String!) {
            news(section: $section, page: $page) {
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
          options: ({ page, sectionCode }) => ({ variables: { section: sectionCode, page: page, tag: 'news' } }),
        }),
        withProps(({ data: { news: { edges, totalCount }, menu } }) => ({
          news: edges.map(item => {
            const date = new Date(item.date)
            const dd = `${date.getDate()}`.padStart(2, '0')
            const mm = `${date.getMonth() + 1}`.padStart(2, '0')
            const yy = `${date.getFullYear()}`

            return { ...item, date: `${dd}.${mm}.${yy}` }
          }),
          count: totalCount,
          menu
        }))
      ),
      compose(
        graphql(gql`
          query ($code: String!, $tag: String!, $section: Int) {
            page(tag: $tag, code: $code, section: $section) {
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
          options: ({ id, sectionCode }) => ({ variables: { code: id, tag: 'news', section: sectionCode } })
        }),
        withProps(({ data: { page, menu }, setQueryStatus }) => {
          if (!page) {
            setQueryStatus(404)
            return {}
          }
          const date = new Date(page.date)
          const dd = `${date.getDate()}`.padStart(2, '0')
          const mm = `${date.getMonth() + 1}`.padStart(2, '0')
          const yy = `${date.getFullYear()}`

          return {
            detail: { ...page, date: `${dd}.${mm}.${yy}` },
            menu
          }
        }),
        branch(({ detail }) => !detail, renderNothing)
      )
    )
  ),
)
