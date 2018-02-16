// @flow

import { connect } from 'react-redux'
import type { MapStateToProps } from 'react-redux'
import { reduxForm, formValueSelector, SubmissionError } from 'redux-form'
import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'
import type { State } from '../../types'
import {saveFlush, withLocale} from '../../lib'


const form = 'login'
const selector = formValueSelector(form)

const mapStateFormToProps: MapStateToProps<State, *, *> = (state) => ({
  username: selector(state, 'username'),
  password: selector(state, 'password'),
})

export default compose(
  withLocale,
  graphql(gql(`
    mutation($username: String!, $password: String!) {
      login(input: {
        username: $username,
        password: $password
      }) {
        token
      }
    }
  `)),
  reduxForm({
    form,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit({ username, password }, _, { t, mutate }) {
      return mutate({ variables: { username, password } })
        .then(({ data: { login } }) => {
          if (login) {
            document.cookie = `token=${login.token}; path=/`
            saveFlush(t('app.welcome'))
            Router.push('/admin/news')
          } else {
            throw new SubmissionError({
              _error: 'Пользователь с таким логином и паролем не найден'
            })
          }
        }, (error) => {
          // eslint-disable-next-line
          console.error(error)
          throw new SubmissionError({
            _error: 'Произошла ошибка при обращении к сервису. Пожалуйста, попробуйте повторить позже'
          })
        })
    },
  }),
  connect(mapStateFormToProps)
)
