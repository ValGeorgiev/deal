import React, { Component } from 'react'
import './topdetails.scss'

class TopDetails extends Component {

  render() {
    const {
      estate
    } = this.props

    return (
      <div className="top-details__wrapper">
        <span>{estate.price} </span>
      </div>
    )
  }
}

export default TopDetails
