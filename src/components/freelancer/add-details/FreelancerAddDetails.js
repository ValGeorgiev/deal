import React, { Component } from 'react'
import _ from 'lodash'
import './freelanceradddetails.scss'

class FreelancerAddDetails extends Component {

  render() {

    const {
      user
    } = this.props

    if (_.isEmpty(user)) {
      return (
        <div className='add-details__wrapper col col-xs-100 col-lg-50'>
          <h2>Лични данни:</h2>
          <div>
            <div className='input-wrapper'>
              <label htmlFor='freelancer-name'>Име:</label>
              <input id='freelancer-name' type='text' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='freelancer-lastname'>Фамилия:</label>
              <input id='freelancer-lastname' type='text' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='freelancer-email'>Email:</label>
              <input id='freelancer-email' type='email' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='freelancer-tel'>Телефон:</label>
              <input id='freelancer-tel' type='tel' />
            </div>
          </div>
        </div>
      )
    }


    return (
      <div className='add-details__wrapper col col-xs-100 col-md-50 col-lg-50'>
        <h2>Лични данни:</h2>
        <div className='add-details__ready-data'>
          <div className='item'>
            <span className='label'>Име и фамилия: </span>
            <span className='value'>{`${user.firstName} ${user.lastName}`}</span>
          </div>
          <div className='item'>
            <span className='label'>Email: </span>
            <span className='value'>{user.email}</span>
          </div>
          {user.phone ? (
              <div className='item'>
                <span className='label'>Телефон: </span>
                <span className='value'>{user.phone}</span>
              </div>
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default FreelancerAddDetails
