import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import * as ACTIONS from 'actions'
import t from 'translations'

import './refinements.scss'

class Refinements extends Component {

  createRefinements() {
    const {
      refinements
    } = this.props

    return refinements.map((ref) => {
      return (
        <div className='refinements__item' key={ref._id}>
          <Link to={`/admin/refinement/${ref._id}`}>
            {ref.name}
          </Link>
          <button className='btn' onClick={() => this.deleteRefinement(ref._id)}>X</button>
        </div>
      )
    })
  }

  deleteRefinement(id) {
    const {
      actions
    } = this.props

    actions.deleteRefinement(id)
  }

  render() {

    return (
      <div className='refinements refinements__wrapper'>
        {this.createRefinements()}
      </div>
    )
  }
}

Refinements.defaultProps = {
  refinements: []
}

const mapStateToProps = (state) => {

  return {
    refinements: state.category.refinements
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }

  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Refinements)
