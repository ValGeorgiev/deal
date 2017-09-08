import Deal from '../../scripts'
import {
  ADMIN_DELETE_CATEGORY
} from './const'

export function deleteCategory (id = '') {
  return (dispatch) => {

    return Deal.Category.deleteByID(id).then((json) => {
      console.log(json)
      dispatch({
        payload: json,
        type: ADMIN_DELETE_CATEGORY
      })
    }).catch((error) => {
      //@TODO log the error message.
    })
  }
}
