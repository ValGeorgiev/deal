/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */

import {
  signup,
  login
} from './authentication/auth'

import {
  addEstateInformation
} from './estate/addEstate'

import {
  getEstates
} from './estate/getEstates'

import {
  getEstateByID
} from './estate/getEstateByID'

import {
  getUserByID
} from './user/getUser'

import {
  logout
} from './user/logout'

import {
  addToFavourites
} from './favourites/addToFavourites'

import {
  removeFromFavourites
} from './favourites/removeFromFavourites'

import {
  getFavouritesEstates
} from './favourites/getFavouritesEstates'

import {
  addCategory
} from './category/addCategory'

import {
  getCategories
} from './category/getCategories'

import {
  getOnlineCategories
} from './category/getOnlineCategories'

import {
  getCategory
} from './category/getCategory'

import {
  deleteCategory
} from './category/deleteCategory'

import {
  updateCategoryData
} from './category/updateCategoryData'

import {
  getRefinements
} from './category/getRefinements'

import {
  getRefinementsByType
} from './category/getRefinementsByType'

import {
  getRefinement
} from './category/getRefinement'

import {
  deleteRefinement
} from './category/deleteRefinement'

import {
  updateRefinementData
} from './category/updateRefinementData'


import {
  setDefaultIndex,
  updateIndex
} from './search/search'

const actions = {
  signup,
  login,
  addEstateInformation,
  getEstates,
  getEstateByID,
  getUserByID,
  addToFavourites,
  removeFromFavourites,
  getFavouritesEstates,
  addCategory,
  getCategories,
  getCategory,
  deleteCategory,
  updateCategoryData,
  getRefinements,
  getRefinementsByType,
  getRefinement,
  deleteRefinement,
  updateRefinementData,
  logout,
  getOnlineCategories,
  setDefaultIndex,
  updateIndex
}

module.exports = actions
