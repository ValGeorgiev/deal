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

  createChildren() {
     const {
      estatesData
    } = this.props

    if (estatesData && estatesData.estates) {
      if (estatesData.estates.length === 0) {
        return (
          <div>
            Няма такива имоти!
          </div>
        )
      } else {

        return estatesData.estates.map((estate) => {
          return (
            <div key={estate._id} className='col col-xs-100 col-md-50'>
              <BuyEstateGridItem estate={estate} />
            </div>
          )
        })
      }
    } else {
      return (
        <div>
          Loading....
        </div>
      )
    }
  }

  render() {

    return (
      <div className="buy-estate-grid__wrapper col col-lg-80">
        <h3 className='grid__title'>Имоти</h3>
        <div className='estate_grid__wrapper'>
          {this.createChildren()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */

  const props = {
    estatesData: state.getEstate.data
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
