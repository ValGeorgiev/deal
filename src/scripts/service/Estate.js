import {
  ADD_ESTATE_LINK,
  GET_ESTATES_LINK,
  GET_ESTATE_BY_ID_LINK
} from './links'

import HTTP from '../HTTP'

class Estate {
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

  fetch(data) {
    return new Promise((resolve, reject) => {

      HTTP.get(HTTP.addParameters(GET_ESTATES_LINK, data)).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  getEstateByID(id) {
    return new Promise((resolve, reject) => {
      HTTP.get(`${GET_ESTATE_BY_ID_LINK}${id}`).then(({ json, ok }) => {
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
