import React, { Component } from 'react'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AdminHeader from 'components/generics/admin-header/AdminHeader'
import AdminNavigation from 'components/admin/admin-navigation/AdminNavigation'
import Categories from 'components/admin/categories/Categories'
import t from 'translations'

class AdminCategories extends Component {

  componentWillMount() {
    const {
      actions
    } = this.props

    actions.getCategories()
  }

  render() {
    return (
      <div>
        <AdminHeader />
        <AdminNavigation />
        <Categories />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(null, mapDispatchToProps)(AdminCategories)
