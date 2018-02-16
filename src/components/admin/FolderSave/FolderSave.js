// @flow

import React, { type Element } from 'react'
import slug from 'slugify'
import App from '../App'
import { Header, Form } from '../App/styled'


type Props = {
  submitting: boolean,
  id?: string,
  name: string,
  path: string,
  query: string,
  change: (field: string, value: string) => void,
  t: (str: string) => string,
  handleRemove: () => void,
  handleSubmit: () => void,
  url: {}
}

const delButtonStyle = {
  marginLeft: '1.5em',
}

export default ({
  t, id, path, name, query, submitting, change, handleSubmit, handleRemove, url,
}: Props): Element<*> => (
  <App url={url}>
    <Header>
      <div className="button-box">
        <a className="button" href={`/admin/files${query}`}>
          {t('files.save.back')}
        </a>
      </div>
      <div className="title">
        {id ? t('files.save.editDir') : t('files.save.addDir')}
      </div>
    </Header>
    <Form onSubmit={handleSubmit}>
      <div className="row">
        <div className="cellFull">
          <label htmlFor="name">{t('files.save.name')}</label>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={t('files.save.inputName')}
              value={name}
              onChange={(e) => {
                change('name', e.target.value)
                change('url', `/${path}/${slug(name)}`)
              }}
              required
            />
          </div>
        </div>
      </div>
      <div className="button-box">
        <button type="submit" disabled={submitting}>
          {t('files.save.save')}
        </button>
        {id ? (
          <button style={delButtonStyle} onClick={handleRemove}>
            {t('files.save.delete')}
          </button>
        ) : null}
      </div>
    </Form>
  </App>
)
