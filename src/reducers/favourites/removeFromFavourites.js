import {
  REMOVE_FROM_FAVOURITES
} from '../../actions/const'

const initialState = {

}

function reducer(state = initialState, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
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
