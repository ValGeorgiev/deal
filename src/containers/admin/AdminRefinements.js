import React, { Component } from 'react'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AdminHeader from 'components/generics/admin-header/AdminHeader'
import AdminNavigation from 'components/admin/admin-navigation/AdminNavigation'
import Refinements from 'components/admin/refinements/Refinements'
import t from 'translations'

class AdminRefinements extends Component {

  componentWillMount() {
    const {
      actions
    } = this.props

    actions.getRefinements()
  }

  render() {
    return (
      <div>
        <AdminHeader />
        <AdminNavigation />
        <Refinements />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(null, mapDispatchToProps)(AdminRefinements)

