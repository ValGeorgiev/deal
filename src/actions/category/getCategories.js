import Deal from 'scripts'
import {
  ADMIN_GET_CATEGORIES
} from './const'

export function getCategories () {
  return (dispatch) => {

    return Deal.Category.getAll().then((json) => {
      dispatch({
        payload: json,
        type: ADMIN_GET_CATEGORIES
      })
    }).catch((error) => {
      //@TODO log the error message.
    })
  }
}
