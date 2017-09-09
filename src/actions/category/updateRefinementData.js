import Deal from '../../scripts'
import {
  ADMIN_UPDATE_REFINEMENT
} from './const'

export function updateRefinementData (data = {}, state) {
  return (dispatch) => {

    return Deal.Category.updateRefinement(data).then((json) => {
      dispatch({
        payload: json,
        type: ADMIN_UPDATE_REFINEMENT
      })
    }).catch((error) => {
      //@TODO log the error message.
    })
  }
}
