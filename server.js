/* eslint-disable no-console */
require('dotenv').config()
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const jwt = require('jsonwebtoken')
const typeDefs = require('./data/schema')
const ObjectID = require('mongodb').ObjectID
const compression = require('compression')
const resolvers = require('./data/resolvers')
require('isomorphic-fetch')

const port = parseInt(process.env.PORT || 3000, 10)
const secret = process.env.SECRET || 'secret'
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({
  dir: './src',
  dev
})
const schema = makeExecutableSchema({ typeDefs, resolvers })
const handle = app.getRequestHandler()

let server
app
  .prepare()
  .then(() => {
    server = express()
    server.use(compression())
    server.use(express.static('public'))
    server.use(cookieParser())

    server.use((req, res, next) => {
      const { token } = req.cookies

      if (token) {
        jwt.verify(token, secret, (err, user) => {
          if (!err && user) {
            req.token = token
            req.user = user
          }
          next()
        })
      } else {
        next()
      }
    })

    server.use('/graphql',
      bodyParser.json(),
      (req, res, next) => {
        const { user, token } = req

        graphqlExpress({
          schema,
          context: { user, token }
        })(req, res, next)
      }
    )

    server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

    server.get('/news/search', (req, res) => {
      app.render(req, res, '/news/search', req.query)
    })

    server.get('/news/:section', (req, res) => {
      const { section } = req.params
      const { page } = req.query

      app.render(req, res, '/news', { page, section })
    })

    server.get('/news/:section/:id', (req, res) => {
      const { section, id } = req.params
      const { page } = req.query

      app.render(req, res, '/news', { section, id, page } )
    })

    server.use((req, res, next) => {
      if (!req.user && req.path.indexOf('/admin') === 0) {
        return res.redirect('/login')
      }
      next()
    })

    server.get('/admin', (req, res) => {
      res.redirect('/admin/news')
    })

    server.get('/admin/pages/:id', (req, res) => {
      const { id } = req.params
      const { page } = req.query

      app.render(req, res, '/admin/pages/save', { id, page } )
    })

    server.get('/admin/news/new', (req, res) => {
      const { page, sort } = req.params

      app.render(req, res, '/admin/news/save', { page, sort } )
    })

    server.get('/admin/news/:id', (req, res, next) => {
      const { id } = req.params
      const { page, sort } = req.query

      if (!ObjectID.isValid(id)) {
        return next()
      }

      app.render(req, res, '/admin/news/save', { id, page, sort } )
    })

    server.get('/admin/files/news', (req, res) => {
      const { page, path } = req.params

      app.render(req, res, '/admin/files/save', { page, path, tag: 'file' } )
    })

    server.get('/admin/files/new', (req, res) => {
      const { page, path } = req.query

      app.render(req, res, '/admin/files/saveFile', { page, path, tag: 'file' } )
    })

    server.get('/admin/files/:id', (req, res, next) => {
      const { id } = req.params
      const { page, path } = req.query

      if (!ObjectID.isValid(id)) {
        return next()
      }

      app.render(req, res, '/admin/files/saveFile', { id, page, path, tag: 'file' } )
    })

    server.get('/admin/folders/new', (req, res) => {
      const { page, path } = req.query

      app.render(req, res, '/admin/files/saveFolder', { page, path, tag: 'folder' } )
    })

    server.get('/admin/folders/:id', (req, res, next) => {
      const { id } = req.params
      const { page, path } = req.query

      if (!ObjectID.isValid(id)) {
        return next()
      }

      app.render(req, res, '/admin/files/saveFolder', { id, page, path, tag: 'folder' } )
    })

    server.all('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port} [${env}]`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
