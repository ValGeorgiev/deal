import Deal from '../../scripts'
import {
  GET_FAVOURITES_ESTATES
} from './const'

export function removeFromFavourites (id) {
  return (dispatch) => {
    return Deal.Favourites.remove(id).then((json) => {
      dispatch({
        payload: json,
        type: GET_FAVOURITES_ESTATES
      })
    }).catch((error) => {
      //@TODO: Log it into error logger
    })
  }
}
