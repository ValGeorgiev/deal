import React, { Component } from 'react'

class GoogleMap extends Component {

  render() {
    let {
      region
    } = this.props

    const mapStyle = {
      border: 0
    }

    region = region === '' ? '' : `${region} - Област, `

    return (
      <div className="google-map__wrapper">
        <iframe width="600" height="450" frameBorder="0" style={mapStyle} src={`https://www.google.com/maps/embed/v1/place?q=${region}България&key=AIzaSyAC7TUN1zOQb_-L7M9CByCErsZYTj8LtP8`} ></iframe>
      </div>
    )
  }
}

export default GoogleMap
