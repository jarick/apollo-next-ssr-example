// @flow

declare var Noty: any

const key = '__flashMessage__'
const timeout = 3000

export const saveFlush = (text: string) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, text)
  }
}

export const showFlush = (C: any) => {
  if (typeof localStorage !== 'undefined') {
    const text = localStorage.getItem(key)
    if (text) {
      if (typeof Noty !== 'undefined') {
        // eslint-disable-next-line
        new Noty({ text, timeout, type: 'success' }).show()
      }
    }
    localStorage.removeItem(key)
  }

  return C
}
