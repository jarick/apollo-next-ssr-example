// @flow

import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { i18nState } from 'redux-i18n'
import type { QueryStatus, Action } from '../types'


export const intitialState = {}

const queryStatus = (initState: QueryStatus = { statusCode: 200 }, action: Action) => (
  action.type === 'SET_QUERY_STATUS' ? action.payload : initState
)

export default combineReducers({ form, queryStatus, i18nState })
