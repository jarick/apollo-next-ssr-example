// @flow

import { injectGlobal } from 'styled-components'

export default injectGlobal`
  .price-row {
    width: 100%;
    margin-bottom: 1em;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    line-height: 1.5;
    div {
      padding: 0 0.5em;
    }
  }
  .price-bold {
    font-weight: bold;
  }
`
