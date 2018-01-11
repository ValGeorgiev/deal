import React, { Component } from 'react'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AdminHeader from 'components/generics/admin-header/AdminHeader'
import AdminNavigation from 'components/admin/admin-navigation/AdminNavigation'
import Category from 'components/admin/category/Category'

import t from 'translations'

class AdminCategory extends Component {

  componentWillMount() {
    const {
      actions,
      match
    } = this.props

    actions.getCategory(match.params.categoryid)
  }

  render() {

    return (
      <div>
        <AdminHeader />
        <AdminNavigation />
        <Category />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(null, mapDispatchToProps)(AdminCategory)
