const { Menu } = require('../data/connectors')

const create = (doc) => Menu.findOneAndUpdate(doc, doc, { upsert: true, setDefaultsOnInsert: true }).exec()

module.exports = Promise.all([
  create({
    tag: 'main',
    sort: 1,
    code: 'home',
    label: 'Главная',
    url: '/',
    exact: true,
  }),
  create({
    tag: 'main',
    sort: 3,
    code: 'news',
    label: 'Новости',
    url: '/news',
    exact: false,
  }),
  create({
    tag: 'main',
    sort: 5,
    code: 'files',
    label: 'Файлы',
    url: '/files?path=files',
    exact: false,
  }),
  // news
  create({
    tag: 'news',
    sort: 1,
    code: 'all',
    label: 'Все',
    url: '/news',
    exact: true,
  }),
  create({
    tag: 'news',
    sort: 2,
    code: 'main',
    label: 'Главные новости',
    url: '/news/main',
    exact: false,
  }),
])
