import React, { Component } from 'react'
import _ from 'lodash'
import './profileedit.scss'

class ProfileEdit extends Component {

  render() {
    const {
      user
    } = this.props

    if (_.isEmpty(user)) {
      return null
    }

    return (
      <div className='profile-edit__wrapper'>
        <button className='btn btn-blue'>Редактирай</button>
      </div>
    )
  }
}

export default ProfileEdit

