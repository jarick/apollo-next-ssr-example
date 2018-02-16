// @flow

import React from 'react'
import uniqueId from 'lodash/uniqueId'
import App from '../App'
import { Table, Header, SearchButton } from '../App/styled'
import Pagination from '../Pagination'
import type { Page } from '../../../types'


export type Props = {
  pages: Page[],
  count: number,
  page: number,
  search: string,
  search: string,
  searchQuery: string,
  setSearchQuery: (s: string) => void,
  t: (str: string) => string,
  url: {}
}

export default ({ t, pages, count, search, searchQuery, setSearchQuery, page, url }: Props) => (
  <App url={url}>
    <Header>
      <div className="title">
        {t('page.list.header')}
      </div>
      <div className="sort-search-box">
        <form method="get" className="search-wrap">
          <input type="hidden" name="page" value="1" />
          <input
            type="search"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton className="button">Поиск</SearchButton>
        </form>
      </div>
    </Header>
    <Table>
      <thead>
        <tr>
          <th>{t('page.list.title')}</th>
        </tr>
      </thead>
      <tbody>
        {pages.map(item => (
          <tr key={uniqueId()}>
            <td className="title-td">
              <a
                href={`/admin/pages/${item._id}?page=${page}&search=${search}`}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Pagination page={page} count={count} queryParams={{ search }} />
  </App>
)
