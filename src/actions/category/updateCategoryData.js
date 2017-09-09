import Deal from '../../scripts'
import {
  ADMIN_UPDATE_CATEGORY
} from './const'

export function updateCategoryData (data = {}, state) {
  return (dispatch) => {

    return Deal.Category.update(data).then((json) => {

      dispatch({
        payload: json,
        type: ADMIN_UPDATE_CATEGORY
      })
    }).catch((error) => {
      console.log(error)
      //@TODO log the error message.
    })
  }
}
