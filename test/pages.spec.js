const { graphql } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { isNumber, isArray } = require('lodash')
const typeDefs = require('../data/schema')
const resolvers = require('../data/resolvers')
const { Page } = require('../data/connectors')
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId
const assert = require('assert')

const schema = makeExecutableSchema({ typeDefs, resolvers })
const rootValue = {}
const context = { user: { roles: ['admin'], username: 'admin' }, token: 'xxx' }
const page = {
  tag: 'news',
  code: 'news-1',
  title: 'News 1',
  preview: 'preview',
  description: 'description',
  body: 'body',
  section: 1,
  status: 1,
  date: new Date().toString()
}

it('should be return news', () => {
  //language=GraphQL
  const query = `
    query news {
      news(page: 1) {
        edges {
          _id
        }
        totalCount
      }
    }
  `

  return graphql(schema, query, rootValue, context)
    .then(({ data: { news: { edges, totalCount } }, errors }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      assert.ok(isArray(edges))
      assert.ok(isNumber(totalCount))
    })
})

it('should be return page when create new page', () => {
  //language=GraphQL
  const query = `
    mutation create($input: PageInput!) {
      createPage(
        input: $input
      ) {
        _id
      }
    }
  `

  return graphql(schema, query, rootValue, context, { input: page })
    .then(({ data: { createPage, errors } }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      assert.ok(createPage)

      return createPage
    })
    .then(({ _id }) => Page.findByIdAndRemove(new ObjectId(_id)))
})

it('should be return page when update exists page', () => {
  //language=GraphQL
  const query = `
    mutation update($id: String!, $input: PageInput!) {
      updatePage(id: $id, input: $input) {
        _id
      }
    }
  `

  return Page.create(page)
    .then(({ _id }) => graphql(schema, query, rootValue, context, { id: _id, input: page }))
    .then(({ data: { updatePage, errors } }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      assert.ok(updatePage)

      return updatePage
    })
    .then(({ _id }) => Page.findByIdAndRemove(new ObjectId(_id)))
})

it('should be return page when remove exists page', () => {
  //language=GraphQL
  const query = `
    mutation remove($id: String!) {
      deletePage(id: $id) {
        _id
      }
    }
  `

  return Page.create(page)
    .then(({ _id }) => graphql(schema, query, rootValue, context, { id: _id }))
    .then(({ data: { deletePage, errors } }) => {
      if (errors) {
        return Promise.reject(errors)
      }

      assert.ok(deletePage)
    })
})

after((done) => {
  mongoose.connection.close(done)
})
