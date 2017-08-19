import {
  ADD_ESTATE_INFORMATION,
  ADD_ESTATE_INFORMATION_ERROR,
  GET_ESTATES,
  GET_ESTATES_ERROR
} from '../actions/const'


const initialState = {
  message: null,
  success: false
}

function reducer(state = initialState, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case ADD_ESTATE_INFORMATION: {
      const { _id } = action.payload
      return {
        success: true,
        id: _id,
        nextState
      }
    }
    case ADD_ESTATE_INFORMATION_ERROR: {
      const { message } = action.payload
      return {
        success: false,
        nextState,
        message
      }
    }
    case GET_ESTATES: {
      return {
        success: true,
        data: action.payload,
        nextState
      }
    }
    case GET_ESTATES_ERROR: {
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
