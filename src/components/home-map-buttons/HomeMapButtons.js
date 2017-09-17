import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './homemapbuttons.scss'

class HomeMapButtons extends Component {
  constructor() {
    super()

    this.state = {
      region: ''
    }
  }

  changeRegion(event) {
    this.setState({
      region: event.target.value
    })
  }

  render() {
    const {
      region
    } = this.state

    return (
      <div className='home-map-buttons__wrapper'>
        <span className='home-map-buttons__region'>{region}</span>
        <input id='map-region' className='hide' onChange={(event) => this.changeRegion(event)} />
        <div className='home-map-buttons__buttons'>
          <Link to='/buy-estate?type=appartament'>
            <button className='btn btn-medium'>Купи</button>
          </Link>
          <Link to='/buy-estate?type=appartament'>
            <button className='btn btn-medium'>Наеми</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomeMapButtons

