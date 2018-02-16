// @flow

import React from 'react'
import type { Element } from 'react'
import TinyMCE from 'react-tinymce'
import { Field } from 'redux-form'
import App from '../App'
import ReadyStateComplete from '../ReadyStateComplete'
import { Header, Form } from '../App/styled'


type Props = {
  handleSubmit: () => void,
  submitting: boolean,
  id?: string,
  html: string,
  preview: string,
  query: string,
  change: (field: string, value: string) => void,
  t: (str: string) => string,
  handleSaveFile: () => void,
  url: {}
}

export default ({
  t, id, html, preview, query, submitting, change, handleSubmit, handleSaveFile, url,
}: Props): Element<*> => (
  <App url={url}>
    <Header>
      <div className="button-box">
        <a className="button" href={`/admin/news${query}`}>
          {t('news.save.back')}
        </a>
      </div>
      <div className="title">
        {id ? t('news.save.edit') : t('news.save.add')}
      </div>
    </Header>
    <Form onSubmit={handleSubmit}>
      <div className="row">
        <div className="cell">
          <label htmlFor="title">{t('news.save.title')}</label>
          <div>
            <Field
              id="title"
              name="title"
              component="input"
              type="text"
              placeholder={t('news.save.inputTitle')}
              required
            />
          </div>
        </div>
        <div className="cell">
          <label htmlFor="status">{t('news.save.status')}</label>
          <div>
            <Field id="status" name="status" component="select">
              <option value="1">{t('news.save.yes')}</option>
              <option value="0">{t('news.save.no')}</option>
            </Field>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="cell">
          <label htmlFor="section">{t('news.save.section')}</label>
          <div>
            <Field id="section" name="section" component="select" required>
              <option />
              <option value="1">{t('news.save.section.main')}</option>
              <option value="2">{t('news.save.section.judgment')}</option>
              <option value="3">{t('news.save.section.prosecutor')}</option>
              <option value="4">{t('news.save.section.analytics')}</option>
              <option value="5">{t('news.save.section.faq')}</option>
            </Field>
          </div>
        </div>
        <div className="cell">
          <label htmlFor="date">{t('news.save.section.date')}</label>
          <div>
            <Field
              name="date"
              component={({ input: { onChange, value } }) => {
                const d = new Date(value)
                const date = `${d.getFullYear()}-${`${d.getMonth() + 1}`.padStart(2, '0')}-${`${d.getDate()}`.padStart(2, '0')}`

                return (
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={date}
                    onChange={e => {
                      onChange(new Date(e.target.value).toString())
                    }}
                    required
                  />
                )
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="cellFull">
          <label htmlFor="body">Описание</label>
          <ReadyStateComplete>
            <TinyMCE
              content={preview || ''}
              config={{
                language_url: '/langs/ru.js',
                height: 150,
                theme: 'modern',
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | fontselect |  fontsizeselect | alignleft aligncenter alignright | image | code',
                content_css: ['/xbbcode.css'],
                file_browser_callback_types: 'image',
                convert_urls: false,
                images_upload_handler: handleSaveFile,
              }}
              onChange={e => change('preview', e.target.getContent())}
            />
          </ReadyStateComplete>
        </div>
      </div>
      <div className="row">
        <div className="cellFull">
          <label htmlFor="body">{t('news.save.section.text')}</label>
          <ReadyStateComplete>
            <TinyMCE
              content={html || ''}
              config={{
                language_url: '/langs/ru.js',
                height: 500,
                theme: 'modern',
                plugins: 'link image media code',
                toolbar: 'undo redo | bold italic | fontselect |  fontsizeselect | alignleft aligncenter alignright | image | media | code',
                content_css: ['/xbbcode.css'],
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
          {t('news.save.submit')}
        </button>
      </div>
    </Form>
  </App>
)
