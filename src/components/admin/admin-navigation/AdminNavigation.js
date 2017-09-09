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
        <div className='nav'>
          <Link to='/admin/add-category'>Add Category</Link>
        </div>
        <div className='nav'>
          <Link to='/admin/categories'>Show all categories</Link>
        </div>
        <div className='nav'>
          <Link to='/admin/refinements'>Show all refinements</Link>
        </div>
      </div>
    )
  }
}

export default AdminNavigation
