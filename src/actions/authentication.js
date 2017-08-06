import Deal from '../scripts'
import { USER_SIGN_UP } from './const'

export function signup (user_data = {}, state) {
  return (dispatch) => {

    return Deal.Auth.signup(user_data).then((json) => {
      console.log(json)
      dispatch({
        payload: json,
        type: USER_SIGN_UP
      })
    })
  }
}
