import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from '../../../actions'
import t from '../../../translations'
import _ from 'lodash'

import './category.scss'

class Category extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    const {
      actions,
      categoryID
    } = this.props

    actions.getCategory(categoryID)
  }

  updateCategoryStatus(online) {
    const {
      actions,
      category
    } = this.props

    actions.updateCategoryData({
      _id: category._id,
      name: category.name,
      value: category.value,
      online: online
    })
  }

  render() {

    const {
      category
    } = this.props

    if (!_.isEmpty(category)) {

      return (
        <div className='category category__wrapper'>
          <p>Name: {category.name}</p>
          { category.online ? (
              <div>
                <p>Online</p>
                <button className='btn btn-big' onClick={() => this.updateCategoryStatus(false)}>Make it OFFLINE!</button>
              </div>
            ) : (
              <div>
                <p>Offline</p>
                <button className='btn btn-big' onClick={() => this.updateCategoryStatus(true)}>Make it ONLINE!</button>
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
    category: state.category.category
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }

  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
