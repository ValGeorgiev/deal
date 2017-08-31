import Deal from '../../scripts'
import {
  ADD_ESTATE_INFORMATION,
  ADD_ESTATE_INFORMATION_ERROR
} from './const'

export function addEstateInformation (data = {}, state) {
  return (dispatch) => {

    return Deal.Estate.add(data).then((json) => {
      dispatch({
        payload: json,
        type: ADD_ESTATE_INFORMATION
      })
    }).catch((error) => {

      error.then((message) => {
        dispatch({
          payload: message,
          type: ADD_ESTATE_INFORMATION_ERROR
        })
      })
    })
  }
}
