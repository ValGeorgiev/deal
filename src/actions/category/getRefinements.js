import Deal from 'scripts'
import {
  ADMIN_GET_REFINEMENTS
} from './const'

export function getRefinements () {
  return (dispatch) => {

    return Deal.Category.getAllRefinements().then((json) => {
      dispatch({
        payload: json,
        type: ADMIN_GET_REFINEMENTS
      })
    }).catch((error) => {
      //@TODO log the error message.
    })
  }
}
