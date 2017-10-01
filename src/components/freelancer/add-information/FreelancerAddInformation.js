import React, { Component } from 'react'
import './freelanceraddinformation.scss'

class FreelancerAddInformation extends Component {

  render() {

    return (
      <div className='add-information__wrapper col col-xs-100'>
        <p className='add-information__label'>Опишете услугата, която предоставяте:</p>
        <textarea className='add-information__value' />
      </div>
    )
  }
}

export default FreelancerAddInformation
