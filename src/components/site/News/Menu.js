// @flow

import React from 'react'
import * as styled from './styled'
import type { Menu } from '../../../types'

type Props = {
  menu: Menu[],
  section: string
}

const NewsMenu = ({ menu, section }: Props) => (
  <styled.Menu>
    {menu.map(item => (
      <styled.MenuItem key={item._id} className={item.code === section ? 'active' : ''}>
        <a href={item.url}>{item.label}</a>
      </styled.MenuItem>
    ))}
  </styled.Menu>
)

export default NewsMenu
