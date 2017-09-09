import Deal from '../../scripts'
import {
  ADMIN_GET_REFINEMENT
} from './const'

export function getRefinement (id = '') {
  return (dispatch) => {

    return Deal.Category.getRefinement(id).then((json) => {
      dispatch({
        payload: json,
        type: ADMIN_GET_REFINEMENT
      })
    }).catch((error) => {
      //@TODO log the error message.
    })
  }
}
