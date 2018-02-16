// @flow

import React, { type Element } from 'react'
import App from '../App'
import styled from './styled'
import Page from '../Page'


export default (): Element<*> => (
  <App pageCode="home">
    {styled}
    <Page pageCode="home" />
  </App>
)
