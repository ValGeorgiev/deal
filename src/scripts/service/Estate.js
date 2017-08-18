import {
  ADD_ESTATE_LINK
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
}


export default Estate
