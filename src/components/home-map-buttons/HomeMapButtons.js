import React, { Component } from 'react'
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
          <div>
            <button className='btn btn-medium'>Купи</button>
          </div>
          <div>
            <button className='btn btn-medium'>Наеми</button>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeMapButtons

