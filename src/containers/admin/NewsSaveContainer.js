// @flow

import { connect } from 'react-redux'
import type { MapStateToProps } from 'react-redux'
import Router from 'next/router'
import slug from 'slugify'
import {reduxForm, formValueSelector, SubmissionError} from 'redux-form'
import { branch, compose, renderNothing, withHandlers, withProps } from 'recompose'
import { graphql } from 'react-apollo'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import gql from 'graphql-tag'
import type { State, Page } from '../../types'
import { saveFlush, setQueryStatus, withLocale } from '../../lib'


const form = 'news'
const selector = formValueSelector(form)

const mapStateFormToProps: MapStateToProps<State, *, *> = (state) => {
  return {
    html: selector(state, 'body'),
    preview: selector(state, 'preview'),
  }
}

export default compose(
  setQueryStatus(),
  withLocale,
  withProps(({ url: { query: { id, page, sort, search } } }) => ({
    id,
    page: page || 1,
    sort: sort || '',
    search: search || '',
  })),
  withProps(({ page, sort, search }) => ({ query: `?page=${page}&sort=${sort}&search=${search}` })),
  graphql(gql(`
    mutation ($input: PageInput!) {
      createPage(input: $input) {
        _id
      }
    }
  `), { name: 'createMutation' }),
  graphql(gql(`
    mutation ($id: String!, $input: PageInput!) {
      updatePage(id: $id, input: $input) {
        _id
      }
    }
  `), { name: 'updateMutation' }),
  branch(({ id }) => id && id.length > 0,
    compose(
      graphql(gql(`
        query ($id: String!) {
          pageById(id: $id) {
            _id
            tag
            code
            title
            preview
            description
            body
            section
            status
            date
          }
        }
      `), {
        options: ({ id }) => ({ variables: { id } }),
      }),
      branch(
        ({ data: { pageById } }) => !pageById,
        compose(
          withProps(({ setQueryStatus }) => {
            setQueryStatus(404)

            return {}
          }),
          renderNothing
        ),
        withProps(({ data: { pageById } }) => {
          const initialValues = pick(pageById, [
            '_id', 'tag', 'code', 'title', 'preview', 'description',
            'body', 'section', 'status', 'date'
          ])

          return { initialValues }
        }),
      ),
    ),
    compose(
      withProps(() => ({
        initialValues: {
          tag: 'news',
          code: '',
          title: '',
          preview: '',
          description: '',
          body: '',
          section: 1,
          status: 1,
          date: new Date().toString()
        }
      })),
    ),
  ),
  reduxForm({
    form,
    onSubmit(values: Page, _, { id, updateMutation, createMutation, query }) {
      const input = omit(values, ['_id', 'date'])
      const date = new Date(values.date)
      const mutation = id && id.length > 0
        ? updateMutation({ variables: { id, input: { ...input, date  } } })
        : createMutation({
          variables: {
            input: {
              ...input,
              date,
              code: slug(values.title),
              description: `${values.title}`,
            }
          }
        })

      return mutation
        .then(() => {
          saveFlush('Новость успешна сохранена')
          Router.push(`/admin/news${query}`)
        }, (error: Error) => {
          // eslint-disable-next-line
          console.error(error)
          throw new SubmissionError({
            _error: 'Произошла ошибка при обращении к сервису. Пожалуйста, попробуйте повторить позже'
          })
        })
    },
  }),
  withHandlers({
    handleSaveFile: () => {
      type ResultFn = (str: string) => void
      return (blobInfo: any, success: ResultFn, failure: ResultFn): void => {
        const xhr = new XMLHttpRequest()
        xhr.withCredentials = false
        xhr.open('POST', '/upload/images')
        xhr.onload = () => {
          if (xhr.status !== 200) {
            failure(`HTTP Error: ${xhr.status}`)
            return
          }
          const json = JSON.parse(xhr.responseText)
          if (!json || typeof json.location !== 'string') {
            failure(`Invalid JSON: ${xhr.responseText}`)
            return
          }
          success(json.location)
        }
        const formData = new FormData()
        formData.append('file', blobInfo.blob(), blobInfo.filename())
        xhr.send(formData)
      }
    },
  }),
  connect(mapStateFormToProps),
)
