import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './homemapbuttons.scss'

class HomeMapButtons extends Component {

  render() {
    let {
      name,
      region
    } = this.props

    name = name || 'Избери район!'

    return (
      <div className='home-map-buttons__wrapper'>
        <div className='home-map-buttons__city'>
          <span className='home-map-buttons__name'>{name}</span>
          <div className='home-map-buttons__buttons'>
            <Link to={`/buy-estate?type=appartament&city=${name}`}>
              <button className='btn btn-medium'>Купи</button>
            </Link>
            <Link to={`/buy-estate?type=appartament&city=${name}`}>
              <button className='btn btn-medium'>Наеми</button>
            </Link>
          </div>
        </div>
        {region ? (
            <div className='home-map-buttons__region'>
              <span className='home-map-buttons__name'>{region}</span>
              <div className='home-map-buttons__buttons'>
                <Link to={`/buy-estate?type=appartament&city=${name}`}>
                  <button className='btn btn-medium'>Купи</button>
                </Link>
                <Link to={`/buy-estate?type=appartament&city=${name}`}>
                  <button className='btn btn-medium'>Наеми</button>
                </Link>
              </div>
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default HomeMapButtons

