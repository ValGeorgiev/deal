import React, { Component } from 'react'
import './profilename.scss'

class ProfileName extends Component {

  render() {
    const {
      name
    } = this.props

    let _name = name.includes('undefined') ? '' : name

    return (
      <div className='profile-name__wrapper'>
        <h1 className='profile-name__name'>{ _name }</h1>
      </div>
    )
  }
}

export default ProfileName

