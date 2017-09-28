import React, { Component } from 'react'
import _ from 'lodash'
import './profiledetails.scss'

class ProfileDetails extends Component {

  render() {
    const {
      user
    } = this.props

    if (_.isEmpty(user)) {
      return null
    }

    return (
      <div className='profile-details__wrapper'>
        <div className='profile-details__type'>
          {user.agency ?
            (
              <span>(Брокер)</span>
            ) : (
              <span>(Частно лице)</span>
            )
          }
        </div>

        <div className='profile-details__email'>
          <span>Email: <span className='email'>{ user.email }</span></span>
        </div>

      </div>
    )
  }
}

export default ProfileDetails

