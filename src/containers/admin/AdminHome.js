import React, { Component } from 'react'
import AdminHeader from '../../components/generics/admin-header/AdminHeader'

import t from '../../translations'

class AdminHome extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <AdminHeader />
        Admin Home Container
      </div>
    )
  }
}

export default AdminHome
