// @flow

import React from 'react'
import { Box, Title, Row1, Date, Description, Row2, Text, Detail, Row3 } from './styled'
import { type Page } from '../../../types'
import { mapSectionCode, mapSectionLabel } from '../../../constants/site/sections'


type Props = {
  news: Page,
  page: number,
  section?: string
}

const NewsItem = ({ news, page, section }: Props) => (
  <Box>
    <Row1>
      <Title>
        {news.body.length > 0
          ? (
            <a
              href={`/news/${mapSectionCode[news.section]}/${news.code}?page=${page}&section=${section || ''}`}
              dangerouslySetInnerHTML={{ __html: news.title }}
            />
          )
          : (
            <span dangerouslySetInnerHTML={{ __html: news.title }} />
          )
        }
      </Title>
    </Row1>
    <Row2>
      <Date>
        {news.date}
      </Date>
      <Description>
        <a href={`/news/${mapSectionCode[news.section]}`}>{mapSectionLabel[news.section]}</a>
      </Description>
    </Row2>
    <Row3>
      <Text dangerouslySetInnerHTML={{ __html: news.preview }} />
    </Row3>
    <div className="row">
      <Detail>
        {news.body.length > 0
          ? (
            <a href={`/news/${mapSectionCode[news.section]}/${news.code}?page=${page}&section=${section || ''}`}>
              Подробнее»
            </a>
          )
          : null
        }
      </Detail>
    </div>
  </Box>
)

export default NewsItem
