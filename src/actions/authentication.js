import Deal from '../scripts'
import {
  USER_SIGN_UP,
  USER_SIGN_UP_ERROR,
  USER_LOGIN,
  USER_LOGIN_ERROR
} from './const'

export function signup (user_data = {}, state) {
  return (dispatch) => {

    return Deal.Auth.signup(user_data).then((json) => {
      dispatch({
        payload: json,
        type: USER_SIGN_UP
      })
    }).catch((error) => {

      error.then((message) => {
        dispatch({
          payload: message,
          type: USER_SIGN_UP_ERROR
        })
      })
    })
  }
}

export function login (user_data = {}, state) {
  return (dispatch) => {

    return Deal.Auth.login(user_data).then((json) => {
      console.log(json)
      window.document.cookie
      dispatch({
        payload: json,
        type: USER_LOGIN
      })
    }).catch((error) => {

      error.then((message) => {
        dispatch({
          payload: message,
          type: USER_LOGIN_ERROR
        })
      })
    })
  }
}
