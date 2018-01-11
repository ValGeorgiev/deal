import Deal from 'scripts'
import {
  GET_FAVOURITES_ESTATES
} from './const'

export function getFavouritesEstates (id = '') {
  return (dispatch) => {

    return Deal.Favourites.get(id).then((json) => {
      dispatch({
        payload: json,
        type: GET_FAVOURITES_ESTATES
      })
    }).catch((error) => {
      //@TODO log in error log file
    })
  }
}
