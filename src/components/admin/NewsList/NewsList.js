// @flow

import React from 'react'
import uniqueId from 'lodash/uniqueId'
import App from '../App'
import { Table, Header, SearchButton } from '../App/styled'
import Pagination from '../Pagination'
import type { Page } from '../../../types'


export type Props = {
  news: Page[],
  count: number,
  page: number,
  sort: { key: string, order: -1 | 1 },
  search: string,
  searchQuery: string,
  setSearchQuery: (s: string) => void,
  t: (str: string) => string,
  url: {}
}

export default ({ t, news, count, search, searchQuery, setSearchQuery, page, sort, url }: Props) => (
  <App url={url}>
    <Header>
      <div className="title">
        {t('news.list.title')}
      </div>
      <div className="button-box">
        <a
          className="button"
          href={`/admin/news/new?sort=${sort.key}:${sort.order}&page=${page}&search=${search}`}
        >
          {t('news.list.add')}
        </a>
      </div>
      <div className="sort-search-box">
        <div className="sort-box">
          <span className="label">
            {t('news.list.sort')}:
          </span>
          <a
            className="link"
            href={`?page=1&sort=date:${sort.key === 'date' && sort.order === 1 ? -1 : 1}&search=${search}`}
          >
            {t('news.list.dateOfPublish')}
            {sort.key === 'date' && sort.order === 1 ? ' ▲' : ''}
            {sort.key === 'date' && sort.order === -1 ? ' ▼' : ''}
          </a>
          <a
            className="link"
            href={`?page=1&sort=title:${sort.key === 'title' && sort.order === 1 ? -1 : 1}&search=${search}`}
          >
            {t('news.list.sortByTitle')}
            {sort.key === 'title' && sort.order === 1 ? ' ▲' : ''}
            {sort.key === 'title' && sort.order === -1 ? ' ▼' : ''}
          </a>
        </div>
        <form method="get" className="search-wrap">
          <input type="hidden" name="page" value="1" />
          <input type="hidden" name="sort" value={`${sort.key}:${sort.order}`} />
          <input
            type="search"
            name="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
          />
          <SearchButton className="button">Поиск</SearchButton>
        </form>
      </div>
    </Header>
    <Table>
      <thead>
        <tr>
          <th>{t('news.list.sortByTitle')}</th>
          <th width="80px">{t('news.list.date')}</th>
        </tr>
      </thead>
      <tbody>
        {news.map((item: Page) => (
          <tr key={uniqueId()}>
            <td className="title-td">
              <a
                href={`/admin/news/${item._id}?sort=${sort.key}:${sort.order}&page=${page}&search=${search}`}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Pagination
      page={page}
      count={count}
      queryParams={{ page: `${page}`, sort: `${sort.key}:${sort.order}`, search: search }}
    />
  </App>
)
