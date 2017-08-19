/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */

import {
  signup,
  login
} from './authentication'

import {
  addEstateInformation
} from './addEstate'

import {
  getEstates
} from './getEstates'

const actions = {
  signup,
  login,
  addEstateInformation,
  getEstates
};

module.exports = actions;
