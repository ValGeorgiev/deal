import Deal from 'scripts'
import {
  UPDATE_SEARCH_INDEX,
  UPDATE_SEARCH_INDEX_ERROR,
  SET_DEFAULT_SEARCH_INDEX
} from './const'

export function updateIndex(data = {}) {
  return (dispatch) => {

    return Deal.Search.update(data).then((data) => {
      dispatch({
        payload: data,
        type: UPDATE_SEARCH_INDEX
      })
    }).catch((error) => {
      console.log(error)
      //@TODO handle error
      // error.then((message) => {
      //   dispatch({
      //     payload: message,
      //     type: UPDATE_SEARCH_INDEX_ERROR
      //   })
      // })
    })
  }
}

export function setDefaultIndex() {
  return (dispatch) => {

    return Deal.Search.setDefaultIndex().then((data) => {

      dispatch({
        payload: data,
        type: SET_DEFAULT_SEARCH_INDEX
      })
    })
  }
}
