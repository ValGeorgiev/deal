import Deal from 'scripts'
import {
  ADMIN_GET_CATEGORY
} from './const'

export function getCategory (id = '') {
  return (dispatch) => {

    return Deal.Category.getCategory(id).then((json) => {
      dispatch({
        payload: json,
        type: ADMIN_GET_CATEGORY
      })
    }).catch((error) => {
      //@TODO log the error message.
    })
  }
}
