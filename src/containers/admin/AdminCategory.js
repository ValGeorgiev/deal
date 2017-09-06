import React, { Component } from 'react'
import AdminHeader from '../../components/generics/admin-header/AdminHeader'
import AdminNavigation from '../../components/admin/admin-navigation/AdminNavigation'

import t from '../../translations'

class AdminCategory extends Component {
  constructor(props) {
    super(props)
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

export default AdminCategory
