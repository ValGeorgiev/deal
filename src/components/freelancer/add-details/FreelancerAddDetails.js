import React, { Component } from 'react'
import _ from 'lodash'
import './freelanceradddetails.scss'

class FreelancerMoreDetails extends Component {

  render() {
    const {
      user
    } = this.props

    return (
      <div>
        <span>Допълнителни данни: </span>
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

class FreelancerAddDetails extends Component {

  render() {

    const {
      user
    } = this.props

    if (_.isEmpty(user)) {
      return (
        <div className='add-details__wrapper'>
          <h2>Лични данни:</h2>
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
          <FreelancerMoreDetails />
        </div>
      )
    }


    return (
      <div className='add-details__wrapper'>
        <h2>Лични данни:</h2>
        <div>
          <div>
            <span>Име и фамилия: </span> <span>{`${user.firstName} ${user.lastName}`}</span>
          </div>
          <div>
            <span>Email: </span> <span>{user.email}</span>
          </div>
          {user.phone ? (
              <div>
                <span>Телефон: </span> <span>{user.phone}</span>
              </div>
            ) : null
          }
        </div>
        <FreelancerMoreDetails user={user} />

      </div>
    )
  }
}

export default FreelancerAddDetails
