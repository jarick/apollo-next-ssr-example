// @flow

import React from 'react'
import type { Element, Node } from 'react'
import Head from 'next/head'
import { View, NavBar, NavBarContainer, NavBarItem } from './styled'


export type Props = {
  children: Node,
  url: any,
  t: (str: string) => string,
}

export default ({ children, t, url: { pathname } }: Props): Element<*> => {
  const isActive = (url, exact) => {
    const path = `${pathname}`
    return exact ? path === url : path.startsWith(url)
  }

  return (
    <View>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{t('app.title')}</title>
      </Head>
      <NavBar>
        <NavBarContainer>
          {/*
          <NavBarItem>
            <Link className={isActive('/', true) ? 'active' : ''} to="#intro">
              {t('app.statistic')}
            </Link>
          </NavBarItem>
          */}
          <NavBarItem>
            <a href="/">
              Сайт
            </a>
          </NavBarItem>
          <NavBarItem>
            <a className={isActive('/admin/news', false) ? 'active' : ''} href="/admin/news">
              {t('app.news')}
            </a>
          </NavBarItem>
          <NavBarItem>
            <a className={isActive('/admin/files', false) ? 'active' : ''} href="/admin/files">
              {t('app.files')}
            </a>
          </NavBarItem>
          <NavBarItem>
            <a className={isActive('/admin/pages', false) ? 'active' : ''} href="/admin/pages">
              {t('app.pages')}
            </a>
          </NavBarItem>
          {/*
          <NavBarItem>
            <Link className={isActive('/code', true) ? 'active' : ''} to="#code">
              {t('app.questions')}
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link className={isActive('/code', true) ? 'active' : ''} to="#code">
              {t('app.answers')}
            </Link>
          </NavBarItem>
          */}
          <NavBarItem>
            <a
              onClick={() => {
                document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
              }}
              href="/login"
            >
              {t('app.exit')}
            </a>
          </NavBarItem>
        </NavBarContainer>
      </NavBar>
      {children}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/tinymce@4.7.6/tinymce.min.js" />
    </View>
  )
}
