import Deal from '../../scripts'
import {
  GET_FAVOURITES_ESTATES
} from './const'

export function getFavouritesEstates () {
  return (dispatch) => {

    return Deal.Favourites.get().then((json) => {
      dispatch({
        payload: json,
        type: GET_FAVOURITES_ESTATES
      })
    }).catch((error) => {
      //@TODO log in error log file
    })
  }
}
