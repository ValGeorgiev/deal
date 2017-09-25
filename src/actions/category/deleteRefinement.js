import Deal from 'scripts'
import {
  ADMIN_DELETE_REFINEMENT
} from './const'

export function deleteRefinement (id = '') {
  return (dispatch) => {

    return Deal.Category.deleteRefinementByID(id).then((json) => {
      dispatch({
        payload: json,
        type: ADMIN_DELETE_REFINEMENT
      })
    }).catch((error) => {
      //@TODO log the error message.
    })
  }
}
