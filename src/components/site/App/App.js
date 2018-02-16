// @flow

import React from 'react'
import ReactGA from 'react-ga'
import type { Element, Node } from 'react'
import Head from 'next/head'
import {
  Name, Phone, HeadRow, MenuIcon, View, Thesis, EMail, BorderLine1, BorderLine2, Content,
  FooterRow, FooterCol, ContentRow, Menu as MenuComponent, SideNav, Substrate
} from './styled'
import type { Template, Menu } from '../../../types'


type Props = {
  children: Node,
  template: Template,
  menu: Menu[],
  isOpen: boolean,
  setOpen: (isOpen: boolean) => void,
  pageCode: string
}

export default ({ children, template, menu, isOpen, setOpen, pageCode }: Props): Element<*> => {
  if (typeof window !== 'undefined') {
    ReactGA.initialize('UA-20228206-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  
  return (
    <View className={isOpen ? 'open' : ''}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      </Head>
      <SideNav className={isOpen ? 'open' : ''}>
        <span className="closebtn" onClick={() => setOpen(false)}>&times;</span>
        {menu.map((item) => (
          <a key={item._id} className={item.code === pageCode ? 'active' : ''} href={item.url}>
            {item.label}
          </a>
        ))}
      </SideNav>
      <HeadRow>
        <HeadRow>
          <MenuIcon onClick={() => setOpen(true)} />
          <Name>
            {template.name}
          </Name>
        </HeadRow>
        <Phone>
          {template.phone}
        </Phone>
      </HeadRow>
      <HeadRow>
        <Thesis>
          {template.thesis}
        </Thesis>
        <EMail>
          {template.email}
        </EMail>
      </HeadRow>
      <BorderLine1 />
      <BorderLine2 />
      <ContentRow>
        <MenuComponent>
          <ul>
            {menu.map((item) => (
              <li key={item._id}>
                <a href={item.url} className={item.code === pageCode ? 'active' : ''}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </MenuComponent>
        <Content>
          {children}
        </Content>
      </ContentRow>
      <FooterRow>
        <FooterCol dangerouslySetInnerHTML={{ __html: template.footer }} />
      </FooterRow>
      <Substrate />
    </View>
  )
}
