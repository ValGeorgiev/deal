import {
  GET_ESTATES,
  GET_ESTATES_ERROR,
  GET_ESTATE_BY_ID,
  GET_ESTATE_BY_ID_ERROR
} from '../actions/const'

const initialState = {
  message: null,
  success: false
}

function reducer(state = initialState, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
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
    case GET_ESTATE_BY_ID: {
      return {
        success: true,
        estate: action.payload.estate,
        nextState
      }
    }
    case GET_ESTATE_BY_ID_ERROR: {
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
