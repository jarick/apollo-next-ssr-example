const { Page, Template, Menu, File } = require('./connectors')
const jwt = require('jsonwebtoken')
const memoize = require('memoizee')
const ObjectId = require('mongodb').ObjectId

const secret = process.env.SECRET || 'secret'
const NEWS_LIST_SIZE = parseInt(process.env.NEWS_LIST_SIZE || 5, 10)
const FILES_LIST_SIZE = parseInt(process.env.FILES_LIST_SIZE || 20, 10)
const ADMIN_LIST_SIZE = parseInt(process.env.ADMIN_LIST_SIZE || 20, 10)
const MAX_AGE = 1000 * 60 * 60
const opts = { maxAge: MAX_AGE }

const menu = memoize(tag => Menu.find({ tag }, null, { sort: { sort: 1 } }).exec(), opts)

const template = memoize(code => Template.findOne({ code }).exec(), opts)

const page = memoize((tag, code, section) => {
  const find = { tag, status: 1, code }

  if (section) {
    find.section = section
  }

  return Page.findOne(find).exec()
}, opts)

const pageById = memoize((id) => Page.findOne(id).exec(), opts)

const news = memoize(async (section, page) => {
  const find = { status: 1, tag: 'news' }

  if (section) {
    find.section = section
  }

  return {
    edges: await Page.find(
      find,
      null,
      {
        sort: { date: -1 },
        skip: NEWS_LIST_SIZE * (Math.max(1, page) - 1),
        limit: NEWS_LIST_SIZE
      }
    ).exec(),
    totalCount: Math.floor(await Page.find(find).count() / NEWS_LIST_SIZE) + 1
  }
}, opts)

const files = memoize(async (path, page) => {
  const find = { path }

  return {
    edges: await File.find(
      find,
      null,
      {
        skip: FILES_LIST_SIZE * (Math.max(1, page) - 1),
        limit: FILES_LIST_SIZE
      }
    ).exec(),
    totalCount: Math.floor(await File.find(find).count() / FILES_LIST_SIZE) + 1
  }
}, opts)

const file = memoize(id => File.findOne(id).exec(), opts)


const search = memoize(async (text, page) => {
  const find = { $text: { $search: text, $language: 'ru' }, tag: 'news', status: 1 }

  return {
    edges: await Page.find(
      find,
      null,
      {
        sort: { date: -1 },
        skip: NEWS_LIST_SIZE * (Math.max(1, page) - 1),
        limit: NEWS_LIST_SIZE
      }
    ).exec(),
    totalCount: Math.floor(await Page.find(find).count() / NEWS_LIST_SIZE) + 1
  }
}, opts)


module.exports = {
  Query: {
    menu(_, { tag }) {
      return menu(tag)
    },
    template(_, { code }) {
      return template(code)
    },
    page(_, { tag, code, section }) {
      return page(tag, code, section)
    },
    pageById(_, { id }) {
      let objectId
      try {
        objectId = new ObjectId(id)
      } catch(e) {
        return null
      }

      return pageById(objectId)
    },
    news(_, { section, page }) {
      return news(section, page)
    },
    files(_, { path, page }) {
      return files(path, page)
    },
    file(_, { id }) {
      let objectId
      try {
        objectId = new ObjectId(id)
      } catch(e) {
        return null
      }

      return file(objectId)
    },
    search(_, { text, page }) {
      if (text.length < 3) {
        return { edges: [], totalCount: 1 }
      }

      return search(text, page)
    },
    user(_, args, { user, token }){
      if (user && token) {
        const { roles, username } = user

        return { roles, username, token }
      } else {
        return null
      }
    },
    async adminNews(_, { page, sortByDate, sortByTitle, search }, { user }) {
      if (!user) {
        return []
      }

      const find = { tag: 'news' }
      const sort = {}
      if (search && search.length > 0) {
        find.title = { $regex: new RegExp(search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/, "\\$&"), 'i') }
      }
      if (sortByDate) {
        sort.date = sortByDate === 1 ? 1 : -1
      }
      if (sortByTitle) {
        sort.title = sortByTitle === 1 ? 1 : -1
      }

      return {
        edges: await Page.find(
          find,
          null,
          {
            sort,
            skip: ADMIN_LIST_SIZE * (Math.max(1, page) - 1),
            limit: ADMIN_LIST_SIZE,
          }
        ).exec(),
        totalCount: Math.floor(await Page.find(find).count() / ADMIN_LIST_SIZE) + 1
      }
    },
    async adminPages(_, { page, search }, { user }) {
      if (!user) {
        return []
      }

      const find = { tag: 'page' }
      if (search && search.length > 0) {
        find.title = { $regex: new RegExp(search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/, "\\$&"), 'i') }
      }

      return {
        edges: await Page.find(
          find,
          null,
          {
            skip: ADMIN_LIST_SIZE * (Math.max(1, page) - 1),
            limit: ADMIN_LIST_SIZE
          }
        ).exec(),
        totalCount: Math.floor(await Page.find(find).count() / ADMIN_LIST_SIZE) + 1
      }
    },
    async adminFiles(_, { page, path, search }, { user }) {
      if (!user) {
        return []
      }

      const find = { path }
      if (search && search.length > 0) {
        find.name = { $regex: new RegExp(search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/, "\\$&"), 'i') }
      }

      return {
        edges: await File.find(
        find,
        null,
        {
          sort: { tag: -1 },
          skip: ADMIN_LIST_SIZE * (Math.max(1, page) - 1),
          limit: ADMIN_LIST_SIZE,
        }
        ).exec(),
        totalCount: Math.floor(await File.find(find).count() / ADMIN_LIST_SIZE) +1,
      }
    }
  },
  Mutation: {
    login(root, { input: { username, password } }) {
      return new Promise((resolve) => {
        const admin = {
          username: process.env.ADMIN_USERNAME || 'admin',
          password: process.env.ADMIN_PASSWORD || 'password',
        }
        if (username !== admin.username || password !== admin.password) {
          return resolve(null)
        }
        const user = { username, roles: ['admin'] }
        jwt.sign(user, secret, (err, token) => {
          if (err || !token) {
            return resolve(null)
          } else {
            return resolve({ ...user, token })
          }
        })
      })
    },
    createPage(root, { input }, { user }) {
      if (!user) {
        throw new Error('Must be logged in to submit a repository.');
      }
      news.clear()
      page.clear()

      return Page.create(input)
    },
    updatePage(root, { id, input }, { user }) {
      if (!user) {
        throw new Error('Must be logged in to submit a repository.');
      }
      let objectId
      try {
        objectId = new ObjectId(id)
      } catch(e) {
        return null
      }
      news.clear()
      page.clear()

      return Page.findByIdAndUpdate(objectId, { $set: input }, { new: true })
    },
    deletePage(root, { id }, { user }) {
      if (!user) {
        throw new Error('Must be logged in to submit a repository.');
      }
      let objectId
      try {
        objectId = new ObjectId(id)
      } catch(e) {
        return null
      }
      news.clear()
      page.clear()

      return Page.findByIdAndRemove(objectId)
    },
    createFile(root, { input }, { user }) {
      if (!user) {
        throw new Error('Must be logged in to submit a repository.');
      }
      files.clear()
      file.clear()

      return File.create(input)
    },
    updateFile(root, { id, input }, { user }) {
      if (!user) {
        throw new Error('Must be logged in to submit a repository.');
      }
      let objectId
      try {
        objectId = new ObjectId(id)
      } catch(e) {
        return null
      }
      files.clear()
      file.clear()

      return File.findByIdAndUpdate(objectId, { $set: input }, { new: true })
    },
    deleteFile(root, { id }, { user }) {
      if (!user) {
        throw new Error('Must be logged in to submit a repository.');
      }
      let objectId
      try {
        objectId = new ObjectId(id)
      } catch(e) {
        return null
      }
      files.clear()
      file.clear()

      return File.findByIdAndRemove(objectId)
    }
  }
}
