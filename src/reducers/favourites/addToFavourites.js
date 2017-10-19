import {
  ADD_TO_FAVOURITES
} from 'actions/const'

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

    default: {
      return state
    }
  }
}

module.exports = reducer
