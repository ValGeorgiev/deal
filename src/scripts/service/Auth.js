import {
  SIGN_UP_LINK,
  LOGIN_LINK
} from './links'

import HTTP from '../HTTP'

class Auth {
  signup(data) {
    console.log('Auth.signup()')

    return new Promise((resolve, reject) => {

      HTTP.post(SIGN_UP_LINK, data).then((json) => {
        resolve(json)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  login() {

  }

  logout() {

  }
}


export default Auth
