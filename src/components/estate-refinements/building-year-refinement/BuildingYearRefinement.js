import React, { Component } from 'react'
import t from '../../../translations'
import * as ACTIONS from '../../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './buildingyearrefinement.scss'

class BuildingYearRefinement extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="building-year__refinement__wrapper">
        BuildingYearRefinement
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

export default connect(mapStateToProps, mapDispatchToProps)(BuildingYearRefinement)
