// @flow

import React from 'react'
import * as styled from './styled'
import { type Page } from '../../../types'
import { mapSectionCode, mapSectionLabel } from '../../../constants/site/sections'

type Props = {
  news: Page,
  page: number,
  section: string
}

const DetailNews = ({ news, page, section }: Props) => {
  return (
    <styled.DetailBox>
      <styled.Row1>
        <styled.Title dangerouslySetInnerHTML={{ __html: news.title }} />
      </styled.Row1>
      <styled.Row2>
        <styled.Date>
          {news.date}
        </styled.Date>
        <styled.Description>
          <a href={`/news/${mapSectionCode[news.section]}`}>{mapSectionLabel[news.section]}</a>
        </styled.Description>
      </styled.Row2>
      <styled.Row3>
        <styled.Text dangerouslySetInnerHTML={{ __html: news.preview }} />
      </styled.Row3>
      <styled.Row3>
        <styled.TextDetail dangerouslySetInnerHTML={{ __html: news.body }} />
      </styled.Row3>
      <styled.Detail>
        {news.body.length > 0
          ? (
            <a href={section.length > 0 ? `/news/${section}?page=${page}` : `/news?page=${page}`}>
              Назад к списку новостей»
            </a>
          )
          : null
        }
      </styled.Detail>
    </styled.DetailBox>
  )
}

export default DetailNews
