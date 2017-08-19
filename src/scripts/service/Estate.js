import {
  ADD_ESTATE_LINK,
  GET_ESTATES
} from './links'

import HTTP from '../HTTP'

class Estate {
  add(data) {

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

  get(data) {
    return new Promise((resolve, reject) => {
      HTTP.get(HTTP.addParameters(GET_ESTATES, data)).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }
}


export default Estate
