import React, { Component } from 'react'
import './freelancermoredetails.scss'

class FreelancerMoreDetails extends Component {

  render() {
    const {
      user
    } = this.props

    return (
      <div className='more-details__wrapper col col-xs-100'>
        <p className='more-details__label'>Допълнителни данни: </p>
        {user && !user.phone ? (
            <div className='input-wrapper'>
              <label htmlFor='freelancer-tel'>Телефон:</label>
              <input id='freelancer-tel' type='tel' />
            </div>
          ) : null
        }
        <div className='input-wrapper'>
          <label htmlFor='freelancer-price'>Цена:</label>
          <input id='freelancer-price' type='text' />
        </div>
      </div>
    )
  }
}

FreelancerMoreDetails.defaultProps = {
  user: {}
}

export default FreelancerMoreDetails
