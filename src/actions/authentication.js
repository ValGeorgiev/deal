import Deal from '../scripts'
import {
  USER_SIGN_UP,
  USER_SIGN_UP_ERROR
} from './const'

export function signup (user_data = {}, state) {
  return (dispatch) => {

    return Deal.Auth.signup(user_data).then((json) => {
      console.log(json)
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
