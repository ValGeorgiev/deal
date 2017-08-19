import React, { Component } from 'react'
import t from '../../translations'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BuyEstateGridItem from '../buy-estate-grid-item/BuyEstateGridItem'
import './buyestategrid.scss'

class BuyEstateGrid extends Component {
  constructor() {
    super()
  }

  render() {
    const {
      estatesData
    } = this.props

    return (
      <div className="buy-estate-grid__wrapper">
        <h3 className='grid__title'>Имоти</h3>
        <div className='estate_grid__wrapper'>
          {estatesData ?
            estatesData.estates.map((estate) => {
              return (
                <div key={estate._id}>
                  <span>Тип: {estate.estateType} </span>
                  <span>Цена: {estate.price} </span>
                  <span>Кв.: {estate.quadrature} </span>
                </div>
              )
            }) : null
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */

  const props = {
    estatesData: state.estate.data
  }
  return props
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyEstateGrid)
