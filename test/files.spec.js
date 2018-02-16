const { graphql } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { isNumber, isArray } = require('lodash')
const typeDefs = require('../data/schema')
const resolvers = require('../data/resolvers')
const { File } = require('../data/connectors')
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId
const assert = require('assert')

const schema = makeExecutableSchema({ typeDefs, resolvers })
const rootValue = {}
const context = { user: { roles: ['admin'], username: 'admin' }, token: 'xxx' }
const file = {
  tag: 'folder',
  path: '/',
  name: 'test',
  url: 'http://file.com'
}

it('should be return files', () => {
  //language=GraphQL
  const query = `
    query files($page: Int!, $path: String!) {
      files(page: $page, path: $path) {
        edges {
          _id
        }
        totalCount
      }
    }
  `

  return graphql(schema, query, rootValue, context, { path: '', page: 1 })
    .then(({ data: { files: { edges, totalCount } }, errors }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      assert.ok(isArray(edges))
      assert.ok(isNumber(totalCount))
    })
})

it('should be return file when create new file', () => {
  //language=GraphQL
  const query = `
    mutation create($input: FileInput!) {
      createFile(
        input: $input
      ) {
        _id
      }
    }
  `

  return graphql(schema, query, rootValue, context, { input: file })
    .then(({ data: { createFile, errors } }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      assert.ok(createFile)

      return createFile
    })
    .then(({ _id }) => File.findByIdAndRemove(new ObjectId(_id)))
})

it('should be return file when update exists file', () => {
  //language=GraphQL
  const query = `
    mutation update($id: String!, $input: FileInput!) {
      updateFile(id: $id, input: $input) {
        _id
      }
    }
  `

  return File.create(file)
    .then(({ _id }) => graphql(schema, query, rootValue, context, { id: _id, input: file }))
    .then(({ data: { updateFile, errors } }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      assert.ok(updateFile)

      return updateFile
    })
    .then(({ _id }) => File.findByIdAndRemove(new ObjectId(_id)))
})

it('should be return file when remove exists file', () => {
  //language=GraphQL
  const query = `
    mutation remove($id: String!) {
      deleteFile(id: $id) {
        _id
      }
    }
  `

  return File.create(file)
    .then(({ _id }) => graphql(schema, query, rootValue, context, { id: _id }))
    .then(({ data: { deleteFile, errors } }) => {
      if (errors) {
        return Promise.reject(errors)
      }

      assert.ok(deleteFile)
    })
})

after((done) => {
  mongoose.connection.close(done)
})
