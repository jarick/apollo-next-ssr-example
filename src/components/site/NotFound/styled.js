// @flow

import styled from 'styled-components'

export const Error = styled.div`
  display: table-cell;
  vertical-align: middle;
`

export const Status = styled.span`
  color: #f8a146;
  font-size: 120px;
  font-weight: bold;
  font-family: "Helvetica Neue", sans-serif;
  border-bottom: 2px solid #f8a146;
`

export const Message = styled.p`
  font-size: 20px;
  a {
    color: #f8a146;
    text-decoration: none;
  }
`

export const Body = styled.div`
  display: table;
  width: 100%;
  margin: 0;
  text-align: center;
  color: #231f20;
  vertical-align: middle;
  height: 250px;
`
