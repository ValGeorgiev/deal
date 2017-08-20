import {
  GET_USER_BY_ID_LINK
} from './links'

import HTTP from '../HTTP'

class User {

  getUserByID(id) {
    return new Promise((resolve, reject) => {
      HTTP.get(`${GET_USER_BY_ID_LINK}${id}`).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }
}


export default User
