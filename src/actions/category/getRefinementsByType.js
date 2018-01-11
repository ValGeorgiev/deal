import Deal from 'scripts'
import {
  GET_REFINEMENTS_BY_TYPE
} from './const'

export function getRefinementsByType(type = '') {
  return (dispatch) => {

    return Deal.Category.getRefinementsByType(type).then((json) => {
      dispatch({
        payload: json,
        type: GET_REFINEMENTS_BY_TYPE
      })
    }).catch((error) => {
      console.log(error)
      //@TODO log the error message.
    })
  }
}
