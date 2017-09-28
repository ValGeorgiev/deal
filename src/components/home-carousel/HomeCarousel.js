import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import BuyEstateGridItem from 'components/buy-estate-grid-item/BuyEstateGridItem'
import { NextArrow, PrevArrow } from 'components/generics/carousel/Arrows'
import './homecarousel.scss'

class HomeCarousel extends Component {

  createChilren(estates) {
    return estates.map((estate, index) => {
      return (
        <div key={estate._id} className='col col-xs-50 col-md-33 col-lg-20'>
          <BuyEstateGridItem estate={estate} />
        </div>
      )
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [ {
        breakpoint: 862,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 552,
        settings: {
          slidesToShow: 1
        }
      }, {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 100000,
        settings: {
          slidesToShow: 5
        }
      } ]
    }

    const {
      estates
    } = this.props

    if (estates.length === 0) {
      return null
    }

    return (
      <div className='home-carousel__wrapper'>
        <Slider {...settings}>
          { this.createChilren(estates) }
        </Slider>
      </div>
    )
  }
}

HomeCarousel.defaultProps = {
  estates: []
}

const mapStateToProps = (state) => {

  const props = {
    estates: state.estate.estates
  }
  return props
}

export default connect(mapStateToProps)(HomeCarousel)

