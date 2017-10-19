import {
  UPDATE_SEARCH_INDEX,
  UPDATE_SEARCH_INDEX_ERROR,
  SET_DEFAULT_SEARCH_INDEX
} from 'actions/const'

function reducer(state = {}, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case UPDATE_SEARCH_INDEX: {
      let index = nextState.index || {}

      console.log('index: ')
      console.log(index)
      console.log('new index: ')
      console.log(action.payload.index)

      return {
        index: Object.assign(index, action.payload.index),
        nextState
      }
    }
    case SET_DEFAULT_SEARCH_INDEX: {

      return {
        index: action.payload,
        nextState
      }
    }
    default: {
      return state
    }
  }
}

module.exports = reducer
