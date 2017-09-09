import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import t from '../../../translations'

import './adminnavigation.scss'

class AdminNavigation extends PureComponent {
  constructor() {
    super()

  }

  render() {

    return (
      <div className='admin-navigation'>
        <Link to='/admin/add-category'>Add Category</Link>
        <Link to='/admin/categories'>Show all categories</Link>
        <Link to='/admin/refinements'>Show all refinements</Link>
      </div>
    )
  }
}

export default AdminNavigation
