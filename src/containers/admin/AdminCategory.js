import React, { Component } from 'react'
import AdminHeader from '../../components/generics/admin-header/AdminHeader'
import AdminNavigation from '../../components/admin/admin-navigation/AdminNavigation'
import Category from '../../components/admin/category/Category'

import t from '../../translations'

class AdminCategory extends Component {
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
        <Category categoryID={match.params.categoryid} />
      </div>
    )
  }
}

export default AdminCategory
