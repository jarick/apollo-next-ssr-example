// @flow

import React from 'react'
import Head from 'next/head'
import App from '../App'
import { FolderLink, FileLink } from './styled'
import Paginate from './Paginate'
import type { File } from '../../../types'

type Props = {
  files: File[],
  count: number,
  path: string,
  page: number
}

export default ({ files, path, count, page }: Props) => {
  const parent = path.split('/').slice(0, -1).join('/')

  return (
    <App pageCode={path.split('/')[0]}>
      <Head>
        <title>ИП Золотарёв Михаил Юрьевич | Документы</title>
        <meta name="description" content="Юридические услуги любой сложности" />
      </Head>
      {path.split('/').filter(item => item.length > 0).length > 1 ? (
        <FolderLink>
          <a href={`?path=${parent}`}>
            ...
          </a>
        </FolderLink>
      ) : ''}
      {files.map((file: any) => (
        file.tag === 'folder' ? (
          <FolderLink key={file._id}>
            <a href={`?path=${file.url.slice(1)}`}>
              {file.name}
            </a>
          </FolderLink>
        ) : (
          <FileLink key={file._id}>
            <a target="_blank" rel="noopener noreferrer" href={file.url}>
              {file.name.split('.').slice(0, -1).join('.')}
            </a>
          </FileLink>
        )
      ))}
      {count > 1
        ? <Paginate count={count} path={path} page={page} />
        : null
      }
    </App>
  )
}
