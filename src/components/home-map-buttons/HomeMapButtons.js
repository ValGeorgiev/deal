import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './homemapbuttons.scss'

class HomeMapButtons extends Component {

  render() {
    const {
      name
    } = this.props

    return (
      <div className='home-map-buttons__wrapper'>
        <span className='home-map-buttons__region'>{name}</span>
        <div className='home-map-buttons__buttons'>
          <Link to={`/buy-estate?type=appartament&city=${name}`}>
            <button className='btn btn-medium'>Купи</button>
          </Link>
          <Link to={`/buy-estate?type=appartament&city=${name}`}>
            <button className='btn btn-medium'>Наеми</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomeMapButtons

