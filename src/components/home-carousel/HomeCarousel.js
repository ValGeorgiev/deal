import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import BuyEstateGridItem from 'components/buy-estate-grid-item/BuyEstateGridItem'

class HomeCarousel extends Component {

  createChilren(estates) {
    return estates.map((estate) => {
      return <BuyEstateGridItem key={estate._id} estate={estate} />
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    const {
      estates
    } = this.props

    if (estates.length === 0) {
      return null
    }

    return (
      <Slider {...settings}>
        { this.createChilren(estates) }
      </Slider>
    );
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

