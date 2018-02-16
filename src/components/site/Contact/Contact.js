// @flow

import React from 'react'
import type { Element } from 'react'
import App from '../App'
import styled from './styled'
import Page from '../Page'

export default (): Element<*> => (
  <App pageCode="contact">
    {styled}
    <Page pageCode="contact" />
  </App>
)
