import {
  ADD_TO_FAVOURITES_LINK,
  REMOVE_FROM_FAVOURITES_LINK,
  GET_FAVOURITES_ESTATES_LINK
} from './links'

import HTTP from '../HTTP'

class Favourites {
  add(id) {
    const uid = window.localStorage.getItem('uid')

    return new Promise((resolve, reject) => {
      HTTP.post(ADD_TO_FAVOURITES_LINK, { id, uid }).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  remove(id) {
    const uid = window.localStorage.getItem('uid')

    return new Promise((resolve, reject) => {
      HTTP.post(REMOVE_FROM_FAVOURITES_LINK, { id, uid }).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  get(id) {

    return new Promise((resolve, reject) => {
      HTTP.get(HTTP.addParameters(GET_FAVOURITES_ESTATES_LINK, { id })).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }
}

export default Favourites
