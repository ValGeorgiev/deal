import React, { Component } from 'react'



class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      translation: 0
    }

    this.onRight = this.onRight.bind(this)
    this.onLeft = this.onLeft.bind(this)
  }

  createCarousel(children) {

    return children.map((child, index) => {
      return (
        <div key={index} className='child-wrapper'>
          {child}
        </div>
      )
    })
  }

  onRight() {
    const {
      children
    } = this.props

    const {
      activeIndex,
      translation
    } = this.state

    if (activeIndex === children.length - 1) {
      return
    }

    this.setState({
      activeIndex: activeIndex + 1,
      translation: translation - 593.8
    })
  }

  onLeft() {
    const {
      children
    } = this.props

    const {
      activeIndex,
      translation
    } = this.state

    if (activeIndex === 0) {
      return
    }

    this.setState({
      activeIndex: activeIndex - 1,
      translation: translation + 593.8
    })
  }


  render() {
    const {
      children
    } = this.props

    const {
      activeIndex,
      translation
    } = this.state

    const activeStyle = {
      transform: `translate3d(${translation}px, 0, 0)`
    }

    return (
      <div className='carousel-wrapper'>
        <div style={activeStyle} className='carousel-inner'>
          {this.createCarousel(children)}
        </div>
        <div onClick={this.onLeft} className='arrowLeft'></div>
        <div onClick={this.onRight} className='arrowRight'></div>
      </div>
    )
  }
}

export default Carousel
