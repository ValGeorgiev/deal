import React, { Component } from 'react'
import t from 'translations'
import EstateMainImage from '../estate/estate-main-image/EstateMainImage'
import TopDetails from '../estate/top-details/TopDetails'
import Description from '../estate/description/Description'
import Carousel from 'components/generics/carousel/Carousel'

import './estatedetails.scss'

class EstateDetails extends Component {

  render() {
    const {
      estate
    } = this.props
    console.log(estate)
    return (
      <div className='estate-details__wrapper'>
        <div className='estate-details__left-col'>
          <Carousel>
            <img src='http://via.placeholder.com/595x450' />
            <img src='http://via.placeholder.com/595x450' />
            <img src='http://via.placeholder.com/595x450' />
            <img src='http://via.placeholder.com/595x450' />
          </Carousel>
          <div className='estate-details__info'>
            <TopDetails estate={estate} />
            <Description info={estate.moreInfo} />
          </div>
        </div>
        <div className='estate-details__right-col'>
          Broker Info
        </div>

      </div>
    )
  }
}

export default EstateDetails
