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
  addToFavourites
} from './favourites/addToFavourites'

import {
  removeFromFavourites
} from './favourites/removeFromFavourites'

import {
  getFavouritesEstates
} from './favourites/getFavouritesEstates'

const actions = {
  signup,
  login,
  addEstateInformation,
  getEstates,
  getEstateByID,
  getUserByID,
  addToFavourites,
  removeFromFavourites,
  getFavouritesEstates
}

module.exports = actions
