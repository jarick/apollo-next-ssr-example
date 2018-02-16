// @flow

import styled from 'styled-components'

export const Row = styled.div`
  margin-bottom: 1em;
  display: block;
`

export const Input = styled.input`
  width: 400px;
  max-width: 100%;
  height: 30px;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #D1D1D1;
  box-shadow: none;
  box-sizing: border-box;
`

export const Button = styled.button`
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #555;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;
  color: #FFF;
  background-color: #2aa542;
  border-color: #2aa542;
  
  &:disabled {
    background-color: #bbb;
    border-color: #bbb;
  }
`

export const Error = styled.span`
  color: red;
  font-size: 1em;
  margin-left: 1em
`
