const menu = require('./menu')
const pages = require('./pages')
const templates = require('./templates')
const mongoose = require('mongoose')

Promise.all([menu, pages, templates])
  .catch(err => {
    // eslint-disable-next-line
    console.error(err)
  })
  .then(() => mongoose.connection.close())
