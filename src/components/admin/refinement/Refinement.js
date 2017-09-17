import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import t from 'translations'
import _ from 'lodash'

import './refinement.scss'

class Refinement extends Component {

  updateRefinementStatus(online) {
    const {
      actions,
      refinement
    } = this.props

    actions.updateRefinementData({
      _id: refinement._id,
      name: refinement.name,
      value: refinement.value,
      online: online
    })
  }

  render() {

    const {
      refinement
    } = this.props

    if (!_.isEmpty(refinement)) {

      return (
        <div className='refinement refinement__wrapper'>
          <p>Name: {refinement.name}</p>
          { refinement.online ? (
              <div>
                <p>Online</p>
                <button className='btn btn-big' onClick={() => this.updateRefinementStatus(false)}>Make it OFFLINE!</button>
              </div>
            ) : (
              <div>
                <p>Offline</p>
                <button className='btn btn-big' onClick={() => this.updateRefinementStatus(true)}>Make it ONLINE!</button>
              </div>
            )
          }
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    refinement: state.category.refinement
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }

  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Refinement)
