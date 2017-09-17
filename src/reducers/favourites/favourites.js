import {
  ADD_TO_FAVOURITES,
  GET_FAVOURITES_ESTATES,
  REMOVE_FROM_FAVOURITES
} from '../../actions/const'

const initialState = {

}

function reducer(state = initialState, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case ADD_TO_FAVOURITES: {
      let user = action.payload.user
      return {
        nextState,
        user
      }
    }
    case GET_FAVOURITES_ESTATES: {
      let favourites = action.payload.favourites

      if (action.payload.user) {
        let user = action.payload.user
        return {
          nextState,
          favourites,
          user
        }
      }

      return {
        nextState,
        favourites
      }
    }
    case REMOVE_FROM_FAVOURITES: {
      let user = action.payload.user
      return {
        nextState,
        user
      }
    }

    default: {
      return state
    }
  }
}

module.exports = reducer
