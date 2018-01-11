import {
  ADMIN_ADD_CATEGORY,
  ADMIN_GET_CATEGORIES,
  ADMIN_GET_CATEGORY,
  ADMIN_DELETE_CATEGORY,
  ADMIN_UPDATE_CATEGORY,
  ADMIN_GET_REFINEMENTS,
  ADMIN_GET_REFINEMENT,
  ADMIN_DELETE_REFINEMENT,
  ADMIN_UPDATE_REFINEMENT,
  GET_ONLINE_CATEGORIES,
  GET_REFINEMENTS_BY_TYPE
} from 'actions/const'

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
    case ADMIN_GET_REFINEMENTS: {
      return {
        nextState,
        refinements: action.payload.refinements
      }
    }
    case ADMIN_GET_REFINEMENT: {
      return {
        nextState,
        refinement: action.payload.refinement
      }
    }
    case ADMIN_DELETE_REFINEMENT: {
      return {
        nextState,
        refinements: action.payload.refinements
      }
    }
    case ADMIN_UPDATE_REFINEMENT: {
      return {
        nextState,
        refinement: action.payload.refinement
      }
    }
    case GET_ONLINE_CATEGORIES: {
      return {
        nextState,
        categories: action.payload.categories
      }
    }
    case GET_REFINEMENTS_BY_TYPE: {
      return {
        refinements: action.payload.filters,
        nextState
      }
    }
    default: {
      return state
    }
  }
}

module.exports = reducer
