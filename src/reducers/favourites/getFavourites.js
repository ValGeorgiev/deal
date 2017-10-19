import {
  GET_FAVOURITES_ESTATES
} from 'actions/const'

const initialState = {

}

function reducer(state = initialState, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
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

    default: {
      return state
    }
  }
}

module.exports = reducer
