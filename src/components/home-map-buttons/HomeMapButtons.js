import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './homemapbuttons.scss'

class HomeMapButtons extends Component {

  render() {
    let {
      name,
      region
    } = this.props

    let isChoosen = !!name

    return (
      <div className='home-map-buttons__wrapper'>
        {
          !isChoosen ? (
            <div className='home-map-buttons__city'>
              <div className='home-map-buttons__buttons'>
                <Link to='/buy-estate'>
                  <button className='btn btn-big'>Търси в цялата страна</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className='home-map-buttons__city'>
              <span className='home-map-buttons__name'>{name}</span>
              <div className='home-map-buttons__buttons'>
                <Link to={`/buy-estate?city=${name}`}>
                  <button className='btn btn-medium btn-blue'>Купи</button>
                </Link>
                <Link to={`/buy-estate?city=${name}`}>
                  <button className='btn btn-medium btn-blue'>Наеми</button>
                </Link>
              </div>
            </div>
          )
        }
        {region ? (
            <div className='home-map-buttons__region'>
              <span className='home-map-buttons__name'>{region}</span>
              <div className='home-map-buttons__buttons'>
                <Link to={`/buy-estate?city=${name}`}>
                  <button className='btn btn-medium btn-blue'>Купи</button>
                </Link>
                <Link to={`/buy-estate?city=${name}`}>
                  <button className='btn btn-medium btn-blue'>Наеми</button>
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

