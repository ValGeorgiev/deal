import React, { Component } from 'react'
import t from '../../translations'
import './estatedetails.scss'

class EstateDetails extends Component {

  render() {
    const {
      estate
    } = this.props

    return (
      <div className="estate-details__wrapper">
        <span>Тип: {estate.estateType}</span>
        <br/>
        <span>Цена: {estate.price}</span>
        <br/>
      </div>
    )
  }
}

export default EstateDetails
