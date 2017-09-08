import {
  ADMIN_ADD_CATEGORY,
  ADMIN_GET_CATEGORIES,
  ADMIN_GET_CATEGORY,
  ADMIN_DELETE_CATEGORY,
  ADMIN_UPDATE_CATEGORY
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
    case ADMIN_GET_CATEGORIES: {
      return {
        nextState,
        categories: action.payload.categories
      }
    }
    case ADMIN_GET_CATEGORY: {
      return {
        nextState,
        category: action.payload.category
      }
    }
    case ADMIN_DELETE_CATEGORY: {
      return {
        nextState,
        categories: action.payload.categories
      }
    }
    case ADMIN_UPDATE_CATEGORY: {
      return {
        nextState,
        category: action.payload.category
      }
    }
    default: {
      return state
    }
  }
}

module.exports = reducer
