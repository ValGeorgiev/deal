import React from 'react'
import './homemap.scss'

export default function HomeMap() {
  return (
    <div className='home-map_wrapper'>
      <div id='map' />
      <span id='map-name'></span>
    </div>
  )
}
