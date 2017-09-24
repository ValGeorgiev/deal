import React, { Component } from 'react'
import './estatemainimage.scss'

class EstateMainImage extends Component {

  render() {
    const {
      image
    } = this.props

    return (
      <div className="estate-image__wrapper">
        <img src={image} />
      </div>
    )
  }
}

export default EstateMainImage
