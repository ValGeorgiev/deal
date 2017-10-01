import React, { Component } from 'react'
import t from 'translations'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from 'components/generics/carousel/Arrows'
import EstateMainImage from '../estate/estate-main-image/EstateMainImage'
import TopDetails from '../estate/top-details/TopDetails'
import Description from '../estate/description/Description'

import './estatedetails.scss'

const CAROUSEL_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [ {
    breakpoint: 830,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 1224,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 100000,
    settings: {
      slidesToShow: 3
    }
  } ]
}

class EstateDetails extends Component {

  render() {
    const {
      estate
    } = this.props

    return (
      <div className='estate-details__wrapper'>
        <div className='estate-details__images col col-xs-100'>
          <Slider {...CAROUSEL_SETTINGS}>
            <div>
              <img src='http://via.placeholder.com/595x450' />
            </div>
            <div>
              <img src='http://via.placeholder.com/595x450' />
            </div>
            <div>
              <img src='http://via.placeholder.com/595x450' />
            </div>
            <div>
              <img src='http://via.placeholder.com/595x450' />
            </div>
            <div>
              <img src='http://via.placeholder.com/595x450' />
            </div>
            <div>
              <img src='http://via.placeholder.com/595x450' />
            </div>
            <div>
              <img src='http://via.placeholder.com/595x450' />
            </div>
          </Slider>
        </div>
        <div className='estate-details__left-col col col-xs-100 col-md-70'>
          <div className='estate-details__info'>
            <TopDetails estate={estate} />
            <Description info={estate.moreInfo} />
          </div>
        </div>
        <div className='estate-details__right-col col col-xs-100 col-md-30'>
          Broker Info
        </div>

      </div>
    )
  }
}

export default EstateDetails
