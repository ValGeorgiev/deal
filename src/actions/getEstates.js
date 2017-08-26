import Deal from '../scripts'
import {
  GET_ESTATES,
  GET_ESTATES_ERROR
} from './const'

export function getEstates (data = {}, state) {
  return (dispatch) => {

    return Deal.Estate.get(data).then((json) => {
      dispatch({
        payload: json,
        type: GET_ESTATES
      })
    }).catch((error) => {
      error.then((message) => {
        dispatch({
          payload: message,
          type: GET_ESTATES_ERROR
        })
      })
    })
  }
}
