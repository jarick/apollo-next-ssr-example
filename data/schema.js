// language=GraphQL
const typeDefinitions = `
  type Page {
    _id: ID!
    tag: String!
    code: String!
    title: String!
    preview: String
    description: String!
    body: String!
    section: Int!
    external_id: Int
    status: Int
    date: String
  }
  
  type Template {
    _id: ID!
    code: String!
    name: String!
    phone: String!
    thesis: String!
    email: String!
    footer: String!
  }

  type Menu {
    _id: ID!
    tag: String!
    code: String!,
    label: String!
    url: String!,
    exact: Boolean
    external: Boolean
  }

  type File {
    _id: ID!
    tag: String!,
    path: String!
    name: String!
    url: String!
  }

  type User {
    roles: [String]
    username: String!
    token: String!
  }
  
  type PagesResponse {
    edges: [Page]!
    totalCount: Int!
  }
  
  type FilesResponse {
    edges: [File]!
    totalCount: Int!
  }

  type Query {
    menu(tag: String!): [Menu]
    template(code: String!): Template
    page(tag: String!, code: String!, section: Int): Page
    pageById(id: String!): Page
    news(section: Int, page: Int!): PagesResponse
    files(path: String!, page: Int!): FilesResponse
    file(id: String!): File
    search(text: String!, page: Int!): PagesResponse
    user: User
    adminNews(page: Int!, sortByDate: Int, sortByTitle: Int, search: String): PagesResponse
    adminPages(page: Int!, search: String): PagesResponse
    adminFiles(page: Int!, path: String!, search: String): FilesResponse
  }
  
  input LoginInput {
    username: String!
    password: String!
  }
  
  input PageInput {
    tag: String!
    code: String!
    title: String!
    preview: String
    description: String!
    body: String!
    section: Int!
    status: Int
    date: String
  }
  
  input FileInput {
    tag: String!,
    path: String!
    name: String!
    url: String!
  }
  
  type Mutation {
    login(input: LoginInput!): User
    createPage(input: PageInput!): Page
    updatePage(id: String!, input: PageInput!): Page
    deletePage(id: String!): Page
    createFile(input: FileInput!): File
    updateFile(id: String!, input: FileInput!): File
    deleteFile(id: String!): File
  }
  
  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = [typeDefinitions];
