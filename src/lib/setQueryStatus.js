// @flow

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { Dispatch } from 'redux'
import type { MapDispatchToProps } from 'react-redux'
import type { Action } from '../types'


const createMapDispatchToProps = (action: string): MapDispatchToProps<*, *, *> => (
  (dispatch: Dispatch<Action>) => bindActionCreators({
    setQueryStatus: (statusCode: number, replace?: string) => ({
      type: action,
      payload: { statusCode, replace }
    })
  }, dispatch)
)

export default (action: string = 'SET_QUERY_STATUS') => (
  connect(null, createMapDispatchToProps(action))
)
