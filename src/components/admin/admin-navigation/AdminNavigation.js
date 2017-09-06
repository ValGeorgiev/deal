import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import t from '../../../translations'

import './adminnavigation.scss'

class AdminNavigation extends Component {
  constructor() {
    super()

  }

  render() {

    return (
      <div className='admin-navigation'>
        Navigations
        <Link to='/admin/add-category'>Add Category</Link>
        <Link to='/admin/categories'>Show all categories</Link>
      </div>
    )
  }
}

export default AdminNavigation
