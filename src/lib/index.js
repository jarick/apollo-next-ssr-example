// @flow

export { default as withData } from './withData'
export { default as setQueryStatus } from './setQueryStatus'
export { default as withLocale } from './withLocale'
export * from './flush'

type Sort = { key: string, order: 1 | -1 }

export const parseSort = (sort: string, fields: string[], defKey: string = '_id', defSort: 1 | -1 = -1): Sort => {
  const parts = sort.split(':')
  return parts.length === 2
    ? {
      key: fields.includes(parts[0]) ? parts[0] : defKey,
      order: parts[1] === '1' ? 1 : -1,
    }
    : {
      key: defKey,
      order: defSort,
    }
}
