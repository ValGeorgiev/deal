import {

} from './links'

import HTTP from '../HTTP'

class Search {

  add(data) {
    console.log(data)
    return new Promise((resolve, reject) => {
      HTTP.post(ADD_ESTATE_LINK, data).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  update(data) {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }

  setDefaultIndex() {
    const index = {
      type: 'apartament'
    }

    return new Promise((resolve, reject) => {
      resolve(index)
    })
  }
}


export default Search
