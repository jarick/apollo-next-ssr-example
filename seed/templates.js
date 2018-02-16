const { Template } = require('../data/connectors')

const create = (doc) => Template.findOneAndUpdate(doc, doc, { upsert: true, setDefaultsOnInsert: true }).exec()

module.exports = Promise.all([
  create({
    code: 'main',
    name: 'ФИО',
    phone: 'Телефон',
    thesis: 'Слоган',
    email: 'E-Mail',
    footer: 'Подпись',
  })
])
