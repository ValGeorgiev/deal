import React, { Component } from 'react'
import t from '../../translations'
import { Link } from 'react-router-dom'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import QuadratureRefinement from './quadrature-refinement/QuadratureRefinement'
import PriceRefinement from './price-refinement/PriceRefinement'
import FloorRefinement from './floor-refinement/FloorRefinement'
import BuildingYearRefinement from './building-year-refinement/BuildingYearRefinement'
import BuildingTypeRefinement from './building-type-refinement/BuildingTypeRefinement'
import './estaterefinements.scss'

class EstateRefinements extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="estate-refinements__wrapper col col-lg-20">
        <PriceRefinement />
        <QuadratureRefinement />
        <FloorRefinement />
        <BuildingTypeRefinement />
        <BuildingYearRefinement />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */

  const props = {
  }
  return props
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default connect(mapStateToProps, mapDispatchToProps)(EstateRefinements)
