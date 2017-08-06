import {
  USER_SIGN_UP
} from '../actions/const'


const initialState = {}

function reducer(state = initialState, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case USER_SIGN_UP: {
      console.log(action.payload)
      return nextState
    }
    default: {
      return state
    }
  }
}

module.exports = reducer
