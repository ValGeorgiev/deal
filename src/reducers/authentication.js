import {
  USER_SIGN_UP,
  USER_SIGN_UP_ERROR
} from '../actions/const'


const initialState = {}

function reducer(state = initialState, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case USER_SIGN_UP: {
      const { success_message } = action.payload
      return {
        nextState,
        success_message
      }
    }
    case USER_SIGN_UP_ERROR: {
      const { message } = action.payload
      return {
        nextState,
        message
      }
    }
    default: {
      return state
    }
  }
}

module.exports = reducer
