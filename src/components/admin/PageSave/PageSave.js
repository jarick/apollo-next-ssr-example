// @flow

import React from 'react'
import type { Element } from 'react'
import TinyMCE from 'react-tinymce'
import App from '../App'
import ReadyStateComplete from '../ReadyStateComplete'
import { Header, Form } from '../App/styled'


export type Props = {
  handleSubmit: () => void,
  submitting: boolean,
  html: string,
  code: string,
  query: string,
  change: (field: string, value: string) => void,
  t: (str: string) => string,
  handleSaveFile: () => void,
  url: {}
}

export default ({
  t, html, code, query, submitting, change, handleSubmit, handleSaveFile, url,
}: Props): Element<*> => (
  <App url={url}>
    <Header>
      <div className="button-box">
        <a className="button" href={`/admin/pages${query}`}>
          {t('page.save.back')}
        </a>
      </div>
      <div className="title">
        {t('page.save.title')}
      </div>
    </Header>
    <Form onSubmit={handleSubmit}>
      <div className="row">
        <div className="cellFull">
          <label htmlFor="body">{t('page.save.text')}</label>
          <ReadyStateComplete>
            <TinyMCE
              content={html || ''}
              config={{
                language_url: '/langs/ru.js',
                height: 500,
                theme: 'modern',
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | image | code',
                content_css: [`/page-${code}.css`],
                file_browser_callback_types: 'image',
                convert_urls: false,
                images_upload_handler: handleSaveFile,
              }}
              onChange={e => change('body', e.target.getContent())}
            />
          </ReadyStateComplete>
        </div>
      </div>
      <div className="button-box">
        <button type="submit" disabled={submitting}>
          {t('page.save.submit')}
        </button>
      </div>
    </Form>
  </App>
)
