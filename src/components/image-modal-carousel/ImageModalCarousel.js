import React, { Component } from 'react'
import t from '../../translations'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './imagemodalcarousel.scss'

class ImageModalCarousel extends Component {
  constructor() {
    super()

    this.closeCarousel = this.closeCarousel.bind(this)
  }

  closeCarousel() {
    this.props.onClose()
  }

  render() {
    const {
      estate
    } = this.props

    return (
      <div className="image-carousel__wrapper">

        <button className='btn btn-medium btn-dark-blue' onClick={this.closeCarousel}>Close</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(ImageModalCarousel)
