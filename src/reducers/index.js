/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux'

import routerReducer from './routerReducer'
import authentication from './user/auth'
import getUser from './user/getUser'
import addToFavourites from './favourites/addToFavourites'
import removeFromFavourites from './favourites/removeFromFavourites'
import getFavourites from './favourites/getFavourites'
import category from './category/category'
import user from './user/user'
import favourites from './favourites/favourites'
import estate from './estate/estate'

const reducers = {
  router: routerReducer,
  authentication,
  getUser,
  addToFavourites,
  removeFromFavourites,
  getFavourites,
  category,
  user,
  estate,
  favourites
}

const combined = combineReducers(reducers)
module.exports = combined
