import {
  SIGN_UP_LINK,
  LOGIN_LINK
} from './links'

import HTTP from '../HTTP'

class Auth {
  signup(data) {

    return new Promise((resolve, reject) => {
      HTTP.post(SIGN_UP_LINK, data).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  login(data) {

     return new Promise((resolve, reject) => {
      HTTP.post(LOGIN_LINK, data).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  logout() {

  }
}


export default Auth
