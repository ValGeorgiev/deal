import React, { Component } from 'react'
import t from '../../../translations'
import * as ACTIONS from '../../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './buildingtyperefinement.scss'

class BuildingTypeRefinement extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="building-type__refinement__wrapper">
        <h4>Вид строителство</h4>
        <select>
          <option value='brick'>Тухла</option>
          <option value='panel'>Панел</option>
          <option value='epk'>ЕПК</option>
          <option value='gradored'>Градоред</option>
          <option value='pk'>ПК</option>
        </select>
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

export default connect(mapStateToProps, mapDispatchToProps)(BuildingTypeRefinement)
