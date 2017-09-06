import React, { Component } from 'react'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AdminHeader from '../../components/generics/admin-header/AdminHeader'
import AdminNavigation from '../../components/admin/admin-navigation/AdminNavigation'

import t from '../../translations'

class AdminCategories extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {
      actions
    } = this.props

  }

  render() {
    return (
      <div>
        <AdminHeader />
        <AdminNavigation />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminCategories)

