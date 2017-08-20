import React, { Component } from 'react'
import t from '../../translations'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './estatedetails.scss'

class EstateDetails extends Component {

  render() {
    const {
      estate
    } = this.props

    return (
      <div className="estate-details__wrapper">
        <span>Тип: {estate.estateType}</span>
        <br/>
        <span>Цена: {estate.price}</span>
        <br/>
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
export default connect(mapStateToProps, mapDispatchToProps)(EstateDetails)
