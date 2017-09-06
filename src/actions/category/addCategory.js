import Deal from '../../scripts'
import {
  ADMIN_ADD_CATEGORY
} from './const'

export function addCategory (data = {}, state) {
  return (dispatch) => {

    return Deal.Category.add(data).then((json) => {
      dispatch({
        payload: json,
        type: ADMIN_ADD_CATEGORY
      })
    }).catch((error) => {

      //@TODO log the error message.
    })
  }
}
