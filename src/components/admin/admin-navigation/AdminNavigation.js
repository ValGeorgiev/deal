import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './adminnavigation.scss'

class AdminNavigation extends PureComponent {

  render() {

    return (
      <div className='admin-navigation'>
        <div className='nav'>
          <Link to='/admin/estates'>Estates</Link>
        </div>
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
