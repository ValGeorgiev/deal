import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import AdminHeader from 'components/generics/admin-header/AdminHeader'
import AdminNavigation from 'components/admin/admin-navigation/AdminNavigation'
import Refinement from 'components/admin/refinement/Refinement'
import t from 'translations'

class AdminRefinement extends Component {

  componentWillMount() {
    const {
      actions,
      match
    } = this.props

    actions.getRefinement(match.params.refinementid)
  }

  render() {
    const {
      match
    } = this.props

    return (
      <div>
        <AdminHeader />
        <AdminNavigation />
        <Refinement />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }

  return actionMap
}

export default connect(null, mapDispatchToProps)(AdminRefinement)
