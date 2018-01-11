import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './publicprofilelink.scss'

class PublicProfileLink extends Component {

  render() {

    return (
      <div className='public-profile-link__wrapper'>
        <Link to='profile/test'>Публичен профил</Link>
      </div>
    )
  }
}

export default PublicProfileLink
