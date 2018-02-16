// @flow

import React from 'react'
import range from 'lodash/range'
import generateUID from 'lodash/uniqueId'
import { Paginate, PaginateItem } from './styled'


type Props = {
  count: number,
  page: number,
  section?: string,
  search?: string,
  query?: string
}

const Item = (props: { number: number, section?: string, query: string }) => {
  const { number, section, query } = props

  return (
    <PaginateItem key={`paginate-${number}`}>
      <a
        href={section
          ? `/news/${section}?page=${number}${query.length > 0 ? '&' : '' }${query}`
          : `/news?page=${number}${query.length > 0 ? '&' : '' }${query}`
        }
      >
        {number}
      </a>
    </PaginateItem>
  )
}

const NewsPaginate = ({ count, page, section, query = '' }: Props) => {
  return (
    <Paginate>
      {page - 5 > 1
        ? range(1, Math.min(4, page - 5)).map(number => (
          <Item section={section} key={generateUID()} number={number} query={query} />
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
        <Item section={section} key={generateUID()} number={number} query={query} />
      ))}

      <PaginateItem key={`paginate-${page}`} className="active">
        <a
          href={section
            ? `/news/${section}?page=${page}${query.length > 0 ? '&' : '' }${query}`
            : `/news?page=${page}${query.length > 0 ? '&' : '' }${query}`
          }
        >
          {page}
        </a>
      </PaginateItem>

      {range(Math.min(page + 1, count + 1), Math.min(page + 6, count + 1)).map(number => (
        <Item section={section} key={generateUID()} number={number} query={query} />
      ))}

      {page < count - 9
        ? (
          <PaginateItem>
            ...
          </PaginateItem>
        )
        : null
      }

      {page < count - 6
        ? range(Math.max(page + 6, count - 3), count + 1).map(number => (
          <Item section={section} key={generateUID()} number={number} page={page} query={query} />
        ))
        : null
      }
    </Paginate>
  )
}

export default NewsPaginate
