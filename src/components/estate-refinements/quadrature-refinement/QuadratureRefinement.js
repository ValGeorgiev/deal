import React, { Component } from 'react'
import t from '../../../translations'
import * as ACTIONS from '../../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './quadraturerefinement.scss'

class QuadratureRefinement extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="quadrature__refinement__wrapper">
        <h4>Квадратура: </h4>
        <div className='quadrature__inner__wrapper'>
          <div className='quadrature__from'>
            <span>От:</span>
            <button className='btn plus-button'> + </button>
            <input type='number' />
            <button className='btn minus-button'> - </button>
          </div>
          <div className='quadrature__to'>
            <span>До:</span>
            <button className='btn plus-button'> + </button>
            <input type='number' />
            <button className='btn minus-button'> - </button>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuadratureRefinement)
