// @flow

import React from 'react'
import uniqueId from 'lodash/uniqueId'
import range from 'lodash/range'
import { Pagination } from '../App/styled'


type Props = {
  count: number,
  page: number,
  queryParams: {[key: string]: string},
}

const Item = (props: { queryParams: {[key: string]: string} }) => {
  const { queryParams } = props
  const query = Object.keys(queryParams)
    .reduce((result, key) => [...result, `${key}=${queryParams[key]}`], [])
    .join('&')

  return <div><a href={`?${query}`}>{queryParams.page}</a></div>
}

export default ({ page, count, queryParams }: Props) => {
  const query = Object.keys({ ...queryParams, page })
    .reduce((result, key) => [...result, `${key}=${queryParams[key]}`], [])
    .join('&')

  return !page || !count || count < 2 ? null : (
    <Pagination>
      {page - 5 > 1
        ? range(1, Math.min(4, page - 5)).map(number => (
          <Item
            key={uniqueId()}
            queryParams={{ ...queryParams, page: `${number}` }}
          />
        ))
        : null
      }
      {page - 5 > 4
        ? (
          <div>
            ...
          </div>
        )
        : null
      }
      {range(Math.max(1, page - 5), page).map(number => (
        <Item
          key={uniqueId()}
          queryParams={{ ...queryParams, page: `${number}` }}
        />
      ))}

      <div key={uniqueId()}>
        <a href={`?${query}`} className="active">
          {page}
        </a>
      </div>

      {range(Math.min(page + 1, count + 1), Math.min(page + 6, count + 1)).map(number => (
        <Item key={uniqueId()} queryParams={{ ...queryParams, page: `${number}` }} />
      ))}

      {page < count - 9
        ? (
          <div>
            ...
          </div>
        )
        : null
      }

      {page < count - 6
        ? range(Math.max(page + 6, count - 3), count + 1).map(number => (
          <Item key={uniqueId()} queryParams={{ ...queryParams, page: `${number}` }} />
        ))
        : null
      }
    </Pagination>
  )
}
