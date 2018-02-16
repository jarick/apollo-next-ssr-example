// @flow

import React from 'react'
import type { Element } from 'react'
import Head from 'next/head'
import type { Page } from '../../../types'

type Props = {
  page: Page
}

const PageComponent = ({ page: { title, description, body } }: Props): Element<*> => (
  <div>
    <Head>
      <title>{`${title}`}</title>
      <meta name="description" content={description} />
    </Head>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </div>
)

export default PageComponent
