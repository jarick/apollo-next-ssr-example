const { Page } = require('../data/connectors')

const create = (doc) => Page.findOneAndUpdate(doc, doc, { upsert: true, setDefaultsOnInsert: true }).exec()

const home = `
<div class="main-row main-row__text1">
  Главная страница
</div>
`

module.exports = Promise.all([
  create({
    tag: 'page',
    code: 'home',
    title: 'Главная',
    description: 'Слоган',
    preview: '',
    body: home,
    section: 0,
    external_id: null,
    status: 1,
  }),
])
