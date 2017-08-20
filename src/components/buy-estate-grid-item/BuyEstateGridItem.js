import React, { Component } from 'react'
import t from '../../translations'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './buyestategriditem.scss'

class BuyEstateItem extends Component {
  constructor() {
    super()
  }

  render() {
    const {
      estate
    } = this.props

    return (
      <div className="buy-estate-item__wrapper">
        <span>Тип: {estate.estateType} </span>
        <span>Цена: {estate.price} </span>
        <span>Кв.: {estate.quadrature} </span>
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
export default connect(mapStateToProps, mapDispatchToProps)(BuyEstateItem)
