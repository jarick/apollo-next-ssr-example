// @flow

import { connect } from 'react-redux'
import type { MapStateToProps } from 'react-redux'
import Router from 'next/router'
import { reduxForm, formValueSelector, SubmissionError } from 'redux-form'
import { graphql } from 'react-apollo'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import gql from 'graphql-tag'
import { compose, withHandlers, withProps, branch, renderNothing } from 'recompose'
import type { State, File } from '../../types'
import { withLocale, saveFlush, setQueryStatus } from '../../lib'


const form = 'file'
const selector = formValueSelector(form)


const mapStateFormToProps: MapStateToProps<State, *, *> = (state) => ({
  name: selector(state, 'name') || '',
})

export default compose(
  setQueryStatus(),
  withLocale,
  withProps(({ url: { query: { id, tag, page, path } } }) => ({ id, tag, page: page || 1, path: path || '' })),
  withProps(({ page, path }) => ({ query: `?page=${page}&path=${path}` })),
  graphql(gql(`
    mutation ($input: FileInput!) {
      createFile(input: $input) {
        _id
      }
    }
  `), { name: 'createFileMutation' }),
  graphql(gql(`
    mutation ($id: String!, $input: FileInput!) {
      updateFile(id: $id, input: $input) {
        _id
      }
    }
  `), { name: 'updateFileMutation' }),
  graphql(gql(`
    mutation ($id: String!) {
      deleteFile(id: $id) {
        _id
      }
    }
  `), { name: 'removeFileMutation' }),
  branch(({ id }) => id && id.length > 0,
    compose(
      graphql(gql(`
        query ($id: String!) {
          file(id: $id) {
            _id
            tag
            path
            name
            url
          }
        }
      `), {
        options: ({ id }) => ({ variables: { id } }),
      }),
      branch(
        ({ data: { file } }) => !file,
        compose(
          withProps(({ setQueryStatus }) => {
            setQueryStatus(404)

            return {}
          }),
          renderNothing
        ),
        withProps(({ data: { file } }) => ({
          initialValues: pick(file, ['_id', 'tag', 'path', 'name', 'url'])
        })),
      ),
    ),
    withProps(({ tag, path }) => ({
      initialValues: {
        tag,
        path,
        name: '',
        url: '',
      }
    }))
  ),
  reduxForm({
    form,
    enableReinitialize: true,
    onSubmit(values: File, _, { tag, query, id, createFileMutation, updateFileMutation }) {
      const success = tag === 'file' ? 'Файл успешно сохранен' : 'Папка успешно сохранена'
      const input = omit(values, ['_id'])
      const promise = !id
        ? createFileMutation({ variables: { input }})
        : updateFileMutation({ variables: { id, input }})

      return promise
        .then(() => {
          saveFlush(success)
          Router.push(`/admin/files${query}`)
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
    handleRemove: ({ id, tag, query, removeFileMutation }: any) => () => {
      return removeFileMutation({ variables: { id }})
        .then(() => {
          const success = tag === 'file' ? 'Файл успешно удалён' : 'Папка успешно удалена'

          saveFlush(success)
          Router.push(`/admin/files${query}`)
        }, (error: Error) => {
          // eslint-disable-next-line
          console.error(error)
        })
    },
    handleSaveFile: ({ path, change }: any) => (e: any) => {
      Array.from(e.target.files).forEach(file => {
        const xhr = new XMLHttpRequest()
        xhr.withCredentials = false
        xhr.open('POST', `/upload/${path.split('/')[0]}`)
        xhr.onload = () => {
          if (xhr.status !== 200) {
            throw new Error(`HTTP Error: ${xhr.status}`)
          }
          const json = JSON.parse(xhr.responseText)
          if (!json || typeof json.location !== 'string') {
            throw new Error(`Invalid JSON: ${xhr.responseText}`)
          }
          change('name', file.name)
          change('url', json.location)
        }
        const formData = new FormData()
        formData.append('file', file, `${path.split('/').slice(1).join('/')}/${file.name}`)
        xhr.send(formData)
      })
    },
  }),
  connect(mapStateFormToProps),
)
