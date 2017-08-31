import Deal from '../../scripts'
import {
  GET_USER
} from '../user/const'

export function addToFavourites (id) {
  return (dispatch) => {

    return Deal.Favourites.add(id).then((json) => {
      dispatch({
        payload: json,
        type: GET_USER
      })
    }).catch((error) => {
      //@TODO: Log it into error logger
    })
  }
}
