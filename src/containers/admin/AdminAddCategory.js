import React, { Component } from 'react'
import AdminHeader from 'components/generics/admin-header/AdminHeader'
import AdminNavigation from 'components/admin/admin-navigation/AdminNavigation'
import AddCategory from 'components/admin/add-category/AddCategory'
import t from 'translations'

class AdminHome extends Component {

 render() {
    return (
      <div>
        <AdminHeader />
        <AdminNavigation />
        <AddCategory />
      </div>
    )
  }
}

export default AdminHome
