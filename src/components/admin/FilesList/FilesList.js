// @flow

import React from 'react'
import uniqueId from 'lodash/uniqueId'
import App from '../App'
import { TableWithAutoWidth, Header, SearchButton } from '../App/styled'
import Pagination from '../Pagination'
import type { File } from '../../../types'


export type Props = {
  files: File[],
  page: number,
  count: number,
  path: string,
  search: string,
  searchQuery: string,
  setSearchQuery: (s: string) => void,
  t: (str: string) => string,
  url: {}
}

export default ({ t, count, files, page, path, search, searchQuery, setSearchQuery, url }: Props) => (
  <App url={url}>
    <Header>
      <div className="title">
        {t('files.list.title')}
      </div>
      {path.length > 0 ? (
        <div className="button-box">
          <a className="button" href={`/admin/files/new?path=${path}&page=${page}`}>
            {t('files.list.addFile')}
          </a>
          <a className="button" href={`/admin/folders/new?path=${path}&page=${page}`}>
            {t('files.list.addFolder')}
          </a>
        </div>
      ) : null}
      <div className="sort-search-box">
        <form method="get" className="search-wrap">
          <input type="hidden" name="page" value="1" />
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
    <TableWithAutoWidth>
      <tbody>
        {path.length > 2 ? (
          <tr key={uniqueId()}>
            <td className="title-td">
              <a className="file" href={`?path=${path.split('/').slice(0, -1).join('/')}`}>
                ...
              </a>
            </td>
            <td />
          </tr>
        ) : null}
        {files.map(item => (
          <tr key={uniqueId()}>
            <td className="title-td">
              {item.tag === 'folder'
                ? (
                  <a className="file" href={`?path=${item.url.slice(1)}`}>
                    <span role="img" aria-label="Folder">📁</span>
                    {` ${item.name}`}
                  </a>
                )
                : (
                  <a className="file" target="_blank" href={item.url} rel="noopener noreferrer">
                    <span role="img" aria-label="Folder">🖹</span>
                    {` ${item.name.split('.').slice(0, -1).join('.')}`}
                  </a>
                )
              }
            </td>
            <td>
              {path.length > 0 ? (
                <div>
                  {item.tag === 'folder'
                    ? (
                      <a className="control" href={`/admin/folders/${item._id}?path=${path}`}>
                        <span role="img" aria-label="Edit">✎</span>
                      </a>
                    )
                    : (
                      <a className="control" href={`/admin/files/${item._id}?path=${path}`}>
                        <span role="img" aria-label="Edit">✎</span>
                      </a>
                    )
                  }
                </div>
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </TableWithAutoWidth>
    <Pagination
      page={page}
      count={count}
      queryParams={{ search, path }}
    />
  </App>
)
