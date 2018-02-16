const { graphql } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('../data/schema')
const resolvers = require('../data/resolvers')
const mongoose = require('mongoose')
const assert = require('assert')

const schema = makeExecutableSchema({ typeDefs, resolvers })
const rootValue = {}
const context = { user: { roles: ['admin'], username: 'admin' }, token: 'xxx' }

it('should be return token when user is logged in', () => {
  //language=GraphQL
  const query = `
    query user {
      user {
        token
      }
    }
  `

  return graphql(schema, query, rootValue, context)
    .then(({ data: { user: { token } } }) => assert.strictEqual(token, 'xxx'))
})

it('should be return null when user is not logged in', () => {
  //language=GraphQL
  const query = `
    query user {
      user {
        token
      }
    }
  `

  return graphql(schema, query, rootValue, {})
    .then(({ data: { user } }) => assert.strictEqual(user, null))
})

it('should be return token when user is login', () => {
  //language=GraphQL
  const query = `
    mutation login {
      login(
        input: {
          username: "admin"
          password: "passw0rd"
        }
      ) {
        token
      }
    }
  `

  return graphql(schema, query, rootValue, {})
    .then(({ data: { login: { token } } }) => assert.ok(token))
})

it('should be return null when user is not login', () => {
  //language=GraphQL
  const query = `
    mutation login {
      login(
        input: {
          username: "admin2"
          password: "passw0rd"
        }
      ) {
        token
      }
    }
  `

  return graphql(schema, query, rootValue, {})
    .then(({ data: { login, errors } }) => {
      if (errors) {
        return Promise.reject(errors)
      }

      assert.strictEqual(login, null)
    })
})


after((done) => {
  mongoose.connection.close(done)
})
