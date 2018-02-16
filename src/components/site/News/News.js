// @flow

import React from 'react'
import Head from 'next/head'
import NewsMenu from './Menu'
import NewsItem from './Item'
import NewsPaginate from './Paginate'
import { Clear, xbbcode } from './styled'
import App from '../App'
import DetailNews from './Detail'
import type { Page, Menu } from '../../../types'


type Props = {
  news?: Page[],
  menu: Menu[],
  page: number,
  count: number,
  section?: string,
  detail?: Page
}

const News = ({ news, menu, page, count, section, detail }: Props) => (
  <App pageCode="news">
    <Head>
      <title>ИП Золотарёв Михаил Юрьевич | Новости</title>
      <meta name="description" content="Юридические услуги любой сложности" />
    </Head>
    {xbbcode}
    <NewsMenu menu={menu} section={section || 'all'} />
    <Clear />
    {detail && <DetailNews
      news={detail}
      page={page}
      section={section || ''}
    />}
    {news && news.map(item => (
      <NewsItem
        key={item._id}
        news={item}
        section={section}
        page={page}
      />
    ))}
    {news && count > 1
      ? <NewsPaginate section={section} count={count} page={page} />
      : null
    }
    {news && count > 1
      ? <Clear />
      : null
    }
  </App>
)

export default News
