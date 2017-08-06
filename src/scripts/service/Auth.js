import fetch from 'node-fetch'
import {
  SIGN_UP_LINK,
  LOGIN_LINK
} from './links'

class Auth {
  signup(data) {
    console.log('Auth.signup()')

    return new Promise((resolve, reject) => {
      fetch(SIGN_UP_LINK, {
        method: 'POST',
        body: 'a=1'
      }).then((response) => {
        console.log('res: ' )
        console.log(response)
        resolve(response)
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
