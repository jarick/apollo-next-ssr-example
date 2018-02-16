// @flow

import React from 'react'
import Head from 'next/head'
import { Field } from 'redux-form'
import NewsMenu from '../News/Menu'
import NewsItem from '../News/Item'
import NewsPaginate from '../News/Paginate'
import { Clear } from '../News/styled'
import App from '../App'
import { Row, Input, Button, Error } from './styled'
import type { Page, Menu } from '../../../types'

const renderField = ({ placeholder, input, type, meta: { touched, error } }: any) => (
  <div>
    <Input {...input} placeholder={placeholder} type={type} />
    {touched && error && <Error>{error}</Error>}
  </div>
)

type Props = {
  news: Page[],
  count: number,
  menu: Menu[],
  handleSubmit: () => void,
  submitting: boolean,
  page: number,
  search: string
}

const Search = ({ news, count, menu, handleSubmit, submitting, page, search }: Props) => (
  <App pageCode="news">
    <Head>
      <title>ИП Золотарёв Михаил Юрьевич | Поиск</title>
      <meta name="description" content="Юридические услуги любой сложности" />
    </Head>
    <NewsMenu menu={menu} section="search" />
    <Clear />
    <form onSubmit={handleSubmit}>
      <Row>
        <Field name="search" component={renderField} type="text" placeholder="минимум 3 буквы" />
      </Row>
      <Row>
        <Button type="submit" disabled={submitting}>Поиск</Button>
      </Row>
    </form>
    {news.map(item => (
      <NewsItem
        key={item._id}
        news={item}
        section="search"
        page={page}
      />
    ))}
    {count > 1
      ? <NewsPaginate section="search" count={count} page={page} query={`search=${search}`} />
      : null
    }
    {count > 1
      ? <Clear />
      : null
    }
  </App>
)

export default Search
