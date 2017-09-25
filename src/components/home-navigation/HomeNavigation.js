import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import t from 'translations'
import './homenavigation.scss'

class HomeNavigation extends PureComponent {

  render() {
    return (
      <div className="home-navigation__wrapper">
        <div className='nav-button__wrapper'>
          <Link to='/add-estate'>
            <div className='nav-button'>
              <h2>Продай</h2>
            </div>
          </Link>
        </div>
        <div className='nav-button__wrapper'>
          <Link to='/add-estate'>
            <div className='nav-button'>
              <h2>Дай под наем</h2>
            </div>
          </Link>
        </div>
        <div className='nav-button__wrapper'>
          <div className='nav-button'>
            <h2>Още</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeNavigation
