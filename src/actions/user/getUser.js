import Deal from '../../scripts'
import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_ERROR
} from './const'

export function getUserByID (id = '', state) {
  return (dispatch) => {

    return Deal.User.getUserByID(id).then((json) => {
      dispatch({
        payload: json,
        type: GET_USER_BY_ID
      })
    }).catch((error) => {

      error.then((message) => {
        dispatch({
          payload: message,
          type: GET_USER_BY_ID_ERROR
        })
      })
    })
  }
}
