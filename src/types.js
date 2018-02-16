// @flow

import type { Store as S, Dispatch } from 'redux'
import type { FormState } from 'redux-form'


export type QueryStatus = { statusCode: number, replace?: string }

export type State = {
  i18n: { [key: string]: string },
  form: FormState<*>,
  queryStatus: QueryStatus
}

export type Action = { type: string, payload?: any }

export type Store = S<State, Action, Dispatch<Action>>

export type Question = {
  _id: string,
  name: string,
  email: string,
  text: string,
}

export type Page = {
  _id: string,
  tag: string,
  code: string,
  title: string,
  preview: string,
  description: string,
  body: string,
  section: number,
  external_id: number,
  status: number,
  date: string
}

export type Template = {
  _id: string,
  code: string,
  name: string,
  phone: string,
  thesis: string,
  email: string,
  footer: string
}

export type Menu = {
  _id: string,
  tag: string,
  code: string,
  label: string,
  url: string,
  exact: boolean,
  external: boolean
}

export type File = {
  _id: string,
  tag: string,
  path: string,
  name: string,
  url: string
}
