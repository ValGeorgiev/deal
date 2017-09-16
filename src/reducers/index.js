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
import addEstate from './estate/addEstate'
import getEstate from './estate/getEstate'
import getUser from './user/getUser'
import addToFavourites from './favourites/addToFavourites'
import removeFromFavourites from './favourites/removeFromFavourites'
import getFavourites from './favourites/getFavourites'
import category from './category/category'

const reducers = {
  router: routerReducer,
  authentication,
  addEstate,
  getEstate,
  getUser,
  addToFavourites,
  removeFromFavourites,
  getFavourites,
  category
}

const combined = combineReducers(reducers)
module.exports = combined
