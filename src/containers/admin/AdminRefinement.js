import React, { Component } from 'react'
import AdminHeader from '../../components/generics/admin-header/AdminHeader'
import AdminNavigation from '../../components/admin/admin-navigation/AdminNavigation'
import Refinement from '../../components/admin/refinement/Refinement'

import t from '../../translations'

class AdminRefinement extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      match
    } = this.props

    return (
      <div>
        <AdminHeader />
        <AdminNavigation />
        <Refinement refinementID={match.params.refinementid} />
      </div>
    )
  }
}

export default AdminRefinement
