import Deal from 'scripts'
import {
  GET_ONLINE_CATEGORIES
} from './const'

export function getOnlineCategories () {
  return (dispatch) => {

    return Deal.Category.getAllOnline().then((json) => {
      dispatch({
        payload: json,
        type: GET_ONLINE_CATEGORIES
      })
    }).catch((error) => {
      //@TODO log the error message.
    })
  }
}
