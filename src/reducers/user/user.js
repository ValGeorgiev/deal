import {
  USER_SIGN_UP,
  USER_SIGN_UP_ERROR,
  USER_LOGIN,
  USER_LOGIN_ERROR,
  GET_USER_BY_ID,
  GET_USER_BY_ID_ERROR,
  GET_USER,
  LOGOUT_USER
} from '../../actions/const'


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
    case USER_LOGIN: {
      const { user } = action.payload
      return {
        login: true,
        user: user,
        nextState
      }
    }
    case USER_LOGIN_ERROR: {
      const { message } = action.payload

      return {
        nextState,
        message
      }
    }
    case GET_USER_BY_ID: {
      return {
        success: true,
        user: action.payload.user,
        nextState
      }
    }
    case GET_USER: {
      if (!action.payload) {
        return {
          user: null,
          nextState
        }
      }

      const user = action.payload.user

      if (!window.localStorage.getItem('uid')) {
        window.localStorage.setItem('uid', user._id)
      }

      return {
        success: true,
        user: user,
        nextState
      }
    }
    case LOGOUT_USER: {

      return {
        nextState,
        user: null
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
