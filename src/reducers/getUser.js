import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_ERROR
} from '../actions/const'

const initialState = {
  message: null,
  user: null,
  success: false
}

function reducer(state = initialState, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case GET_USER_BY_ID: {
      return {
        success: true,
        user: action.payload.user,
        nextState
      }
    }
    case GET_USER_BY_ID_ERROR: {
      return {
        success: false,
        message: action.payload,
        nextState
      }
    }
    default: {
      return state
    }
  }
}

module.exports = reducer
