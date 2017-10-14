import React, { Component } from 'react'
import t from 'translations'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import QuadratureRefinement from './quadrature-refinement/QuadratureRefinement'
import PriceRefinement from './price-refinement/PriceRefinement'
import FloorRefinement from './floor-refinement/FloorRefinement'
import BuildingYearRefinement from './building-year-refinement/BuildingYearRefinement'
import BuildingTypeRefinement from './building-type-refinement/BuildingTypeRefinement'
import InnerTypeRefinement from './inner-type-refinement/InnerTypeRefinement'
import './estaterefinements.scss'

class EstateRefinements extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="estate-refinements__wrapper col col-lg-30">
        <InnerTypeRefinement />
        <PriceRefinement />
        <QuadratureRefinement />
        <FloorRefinement />
        <BuildingTypeRefinement />
        <BuildingYearRefinement />
      </div>
    )
  }
}

// @TODO we will need this functions when categories/refinements are ready
const mapStateToProps = (state) => {

  const props = {
  }
  return props
}

export default connect(mapStateToProps)(EstateRefinements)
