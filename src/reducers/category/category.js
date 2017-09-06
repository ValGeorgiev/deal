import {
  ADMIN_ADD_CATEGORY
} from '../../actions/const'

const initialState = {

}

function reducer(state = initialState, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case ADMIN_ADD_CATEGORY: {

      return {
        success: true,
        category: action.payload.category,
        nextState
      }
    }

    default: {
      return state
    }
  }
}

module.exports = reducer
