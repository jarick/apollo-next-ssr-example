// @flow

import React from 'react'
import range from 'lodash/range'
import generateUID from 'lodash/uniqueId'
import { Paginate, PaginateItem } from '../News/styled'

type Props = {
  count: number,
  page: number,
  path: string,
}

const Item = (props: { number: number, path: string }) => {
  const { number, path } = props
  return (
    <PaginateItem key={generateUID()}>
      <a href={`?path=${path}&page=${number}`}>
        {number}
      </a>
    </PaginateItem>
  )
}

const FilesPaginate = ({ count, page, path }: Props) => {
  return (
    <Paginate>
      {page - 5 > 1
        ? range(1, Math.min(4, page - 5)).map(number => (
          <Item path={path} key={generateUID()} number={number} />
        ))
        : null
      }
      {page - 5 > 4
        ? (
          <PaginateItem>
            ...
          </PaginateItem>
        )
        : null
      }
      {range(Math.max(1, page - 5), page).map(number => (
        <Item path={path} key={generateUID()} number={number} />
      ))}

      <PaginateItem key={`paginate-files-${page}`} className="active">
        <a href={`?path=${path}&page=${page}`}>
          {page}
        </a>
      </PaginateItem>

      {range(Math.min(page + 1, count + 1), Math.min(page + 6, count + 1)).map((number) => {
        return <Item path={path} key={generateUID()} number={number} />
      })}

      {page < count - 9
        ? (
          <PaginateItem>
            ...
          </PaginateItem>
        )
        : null
      }

      {page < count - 6
        ? range(Math.max(page + 6, count - 3), count + 1).map((number) => {
          return <Item path={path} key={generateUID()} number={number} />
        })
        : null
      }
    </Paginate>
  )
}

export default FilesPaginate
