import Deal from 'scripts'
import {
  GET_ESTATES,
  GET_ESTATES_ERROR
} from './const'

export function getEstates (data = {}, lazyLoad = false) {
  return (dispatch) => {

    return Deal.Estate.fetch(data).then((json) => {
      dispatch({
        payload: {
          json,
          lazyLoad
        },
        type: GET_ESTATES
      })
    }).catch((error) => {
      console.log(error)
      error.then((message) => {
        dispatch({
          payload: message,
          type: GET_ESTATES_ERROR
        })
      })
    })
  }
}
