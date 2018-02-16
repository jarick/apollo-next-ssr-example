// @flow

import Page from '../components/site/Home'
import { withData } from '../lib'
import i18n from '../i18n'
import initStore from '../store'

export default withData(initStore, { translations: { ru: i18n }, lang: 'ru' })(Page)

