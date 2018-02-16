// @flow

import React from 'react'
import {
  Error,
  Status as ErrorStatus,
  Message,
  Body,
} from './styled'


export default () => (
  <Body>
    <Error>
      <ErrorStatus>404</ErrorStatus>
      <Message>Запрашиваемая страница не найдена. <a href="/">Вернуться на главную</a></Message>
    </Error>
  </Body>
)
