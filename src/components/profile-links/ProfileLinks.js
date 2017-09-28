import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './profilelinks.scss'

class ProfileLinks extends Component {

  render() {

    return (
      <div className='profile-links__wrapper'>
        <Link to='#'>Създай агенция</Link>
        <Link to='#'>Създай фрийлансър портфолио</Link>
        <Link to='#'>Създай фирма</Link>
      </div>
    )
  }
}

export default ProfileLinks

