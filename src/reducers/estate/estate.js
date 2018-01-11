import {
  ADD_ESTATE_INFORMATION,
  ADD_ESTATE_INFORMATION_ERROR,
  GET_ESTATES,
  GET_ESTATES_ERROR,
  GET_ESTATE_BY_ID,
  GET_ESTATE_BY_ID_ERROR
} from 'actions/const'

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
        id: _id,
        nextState,
      }
    }
    case ADD_ESTATE_INFORMATION_ERROR: {
      const { message } = action.payload
      return {
        nextState,
        message
      }
    }
    case GET_ESTATES: {
      let estates = nextState.estates || []

      if (action.payload.lazyLoad) {
        return {
          estates: [...estates, ...action.payload.json.estates],
          nextState
        }
      }
      return {
        estates: action.payload.json.estates,
        nextState
      }
    }
    case GET_ESTATES_ERROR: {
      return {
        message: action.payload,
        nextState
      }
    }
    case GET_ESTATE_BY_ID: {
      return {
        estate: action.payload.estate,
        nextState
      }
    }
    case GET_ESTATE_BY_ID_ERROR: {
      return {
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
