import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import t from '../../translations'
import './homenavigation.scss'

class HomeNavigation extends PureComponent {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="home-navigation__wrapper">
        <div className='nav-button__wrapper'>
          <Link to='/buy-estate?type=appartament'>
            <div className='nav-button'>
              <img src='http://via.placeholder.com/150x170' />
              <h2>Купи</h2>
            </div>
          </Link>
        </div>
        <div className='nav-button__wrapper'>
          <Link to='/add-estate'>
            <div className='nav-button'>
              <img src='http://via.placeholder.com/150x170' />
              <h2>Продай</h2>
            </div>
          </Link>
        </div>
        <div className='nav-button__wrapper'>
          <div className='nav-button'>
            <img src='http://via.placeholder.com/150x170' />
            <h2>Още</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeNavigation
