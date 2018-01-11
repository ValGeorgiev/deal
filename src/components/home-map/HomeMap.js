import React, { PureComponent } from 'react'
import './homemap.scss'

export default class HomeMap extends PureComponent {

  render() {

    return (
      <div className='home-map_wrapper'>
        <div id='map' />
        <span id='map-name' />
      </div>
    )
  }
}
