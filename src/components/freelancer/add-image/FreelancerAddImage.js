import React, { Component } from 'react'
import ProfileImage from 'components/profile-image/ProfileImage'
import _ from 'lodash'
import './freelanceraddimage.scss'

class FreelancerAddImage extends Component {

  render() {

    const {
      user
    } = this.props

    if (_.isEmpty(user)) {

      return (
        <div className='add-image__wrapper'>
          <button className='btn btn-blue btn-big'>Добави снимка</button>
        </div>
      )
    }

    return (
      <div className='add-image__wrapper'>
        <ProfileImage />
      </div>
    )
  }
}

export default FreelancerAddImage
