import React, { Component } from 'react'
import t from '../../translations'
import Carousel from '../generics/carousel/Carousel'
import './imagemodalcarousel.scss'

class ImageModalCarousel extends Component {
  constructor() {
    super()

    this.closeCarousel = this.closeCarousel.bind(this)
  }

  closeCarousel() {
    this.props.onClose()
  }

  render() {
    const {
      estate
    } = this.props

    return (
      <div className="image-carousel__wrapper">
        <Carousel>
          <img src='http://via.placeholder.com/595x450' />
          <img src='http://via.placeholder.com/595x450' />
          <img src='http://via.placeholder.com/595x450' />
          <img src='http://via.placeholder.com/595x450' />
        </Carousel>
        <button className='btn btn-medium btn-dark-blue' onClick={this.closeCarousel}>Close</button>
      </div>
    )
  }
}

export default ImageModalCarousel
