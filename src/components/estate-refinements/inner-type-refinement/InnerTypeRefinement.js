import React, { Component } from 'react'
import t from '../../../translations'
import * as ACTIONS from '../../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './innertyperefinement.scss'

const ESTATE_TYPES = {
  appartament: 'appartament',
  house: 'house',
  bussiness: 'bussiness',
  hotel: 'hotel',
  faculty: 'faculty',
  sports: 'sports',
  field: 'field'
}

class InnerTypeRefinement extends Component {
  constructor() {
    super()
  }

  createChildren(type = ESTATE_TYPES.appartament) {

    switch(type) {
      case ESTATE_TYPES.appartament: {
        return (
          <div>
            appartament
          </div>
        )
      }
      case ESTATE_TYPES.house: {
        return (
          <div>
            house
          </div>
        )
      }
      case ESTATE_TYPES.hotel: {
        return (
          <div>
            hotel
          </div>
        )
      }
      case ESTATE_TYPES.faculty: {
        return (
          <div>
            faculty
          </div>
        )
      }
      case ESTATE_TYPES.sports: {
        return (
          <div>
            sports
          </div>
        )
      }
      case ESTATE_TYPES.field: {
        return (
          <div>
            field
          </div>
        )
      }
    }
  }

  render() {
    const {
      estateType
    } = this.props

    return (
      <div className="inner-type-refinement__wrapper">
        {this.createChildren(estateType)}
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

export default connect(mapStateToProps, mapDispatchToProps)(InnerTypeRefinement)
