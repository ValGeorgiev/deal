import {
  GET_USER
} from './const'

export function logout () {
  return (dispatch) => {
    dispatch({
      payload: null,
      type: GET_USER
    })
  }
}
