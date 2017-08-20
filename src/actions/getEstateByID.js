import Deal from '../scripts'
import {
  GET_ESTATE_BY_ID,
  GET_ESTATE_BY_ID_ERROR
} from './const'

export function getEstateByID (id = '', state) {
  return (dispatch) => {

    return Deal.Estate.getEstateByID(id).then((json) => {
      dispatch({
        payload: json,
        type: GET_ESTATE_BY_ID
      })
    }).catch((error) => {

      error.then((message) => {
        dispatch({
          payload: message,
          type: GET_ESTATE_BY_ID_ERROR
        })
      })
    })
  }
}
