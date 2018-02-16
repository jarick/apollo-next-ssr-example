const { graphql } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { isNumber, isArray } = require('lodash')
const typeDefs = require('../data/schema')
const resolvers = require('../data/resolvers')
const { Question } = require('../data/connectors')
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId
const assert = require('assert')

const schema = makeExecutableSchema({ typeDefs, resolvers })
const rootValue = {}
const context = { user: { roles: ['admin'], username: 'admin' }, token: 'xxx' }
const question = { name: 'test', email: 'no@email.com', text: 'body' }

it('should be return questions', () => {
  //language=GraphQL
  const query = `
    query questions {
      questions(page: 1) {
        edges {
          _id
        }
        totalCount
      }
    }
  `

  return graphql(schema, query, rootValue, context)
    .then(({ data, errors }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      const { questions: { edges, totalCount } } = data

      assert.ok(isArray(edges))
      assert.ok(isNumber(totalCount))
    })
})

it('should be return question when create new question', () => {
  //language=GraphQL
  const query = `
    mutation create($input: QuestionInput!) {
      createQuestion(input: $input) {
        _id
      }
    }
  `

  return graphql(schema, query, rootValue, context, { input: question })
    .then(({ data: { createQuestion }, errors }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      assert.ok(createQuestion)

      return createQuestion
    })
    .then(({ _id }) => Question.findByIdAndRemove(new ObjectId(_id)))
})

it('should be return question when update exists question', () => {
  //language=GraphQL
  const query = `
    mutation update($id: String!, $input: QuestionInput!) {
      updateQuestion(id: $id, input: $input) {
        _id
      }
    }
  `

  return  Question.create(question)
    .then(({ _id }) => graphql(schema, query, rootValue, context, { id: _id, input: question }))
    .then(({ data: { updateQuestion }, errors }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      assert.ok(updateQuestion)

      return updateQuestion
    })
    .then(({ _id }) => Question.findByIdAndRemove(new ObjectId(_id)))
})

it('should be return question when remove exists question', () => {
  //language=GraphQL
  const query = `
    mutation delete($id: String!) {
      deleteQuestion(id: $id) {
        _id
      }
    }
  `

  return  Question.create(question)
    .then(({ _id }) => graphql(schema, query, rootValue, context, { id: _id }))
    .then(({ data: { deleteQuestion }, errors }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      assert.ok(deleteQuestion)
    })
})

after((done) => {
  mongoose.connection.close(done)
})
