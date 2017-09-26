import React, { Component } from 'react'
import t from 'translations'
import { Link } from 'react-router-dom'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DealModal from 'components/generics/deal-modal/DealModal'
import ImageModalCarousel from '../image-modal-carousel/ImageModalCarousel'
import EstateMainImage from '../estate/estate-main-image/EstateMainImage'
import FavIcon from 'images/fav-icon.svg'
import FavIconFilled from 'images/fav-icon-filled.png'

import './buyestategriditem.scss'

class BuyEstateItem extends Component {
  constructor() {
    super()

    this.state = {
      openCarousel: false
    }

    this.openImageCarousel = this.openImageCarousel.bind(this)
    this.closeImageCarousel = this.closeImageCarousel.bind(this)
  }

  openImageCarousel() {
    this.setState({
      openCarousel: true
    })
  }

  closeImageCarousel() {
    this.setState({
      openCarousel: false
    })
  }

  addRemoveFavourites(id, isAdded) {
    const {
      actions
    } = this.props

    if (isAdded) {
      actions.removeFromFavourites(id)
    } else {
      actions.addToFavourites(id)
    }
  }

  createFavouritesButton(estate, isAddedToFavs) {
    return !!this.props.user ? (
      <img onClick={() => this.addRemoveFavourites(estate._id, isAddedToFavs)} className='favourite-icon' src={isAddedToFavs ? FavIconFilled : FavIcon} />
    ) : null
  }

  render() {
    const {
      estate,
      user
    } = this.props

    const {
      openCarousel
    } = this.state

    const isAddedToFavs = user && user.favourites ? user.favourites.includes(estate._id) : false

    return (
      <div className={`buy-estate-item__wrapper ${openCarousel ? 'modal' : ''}`}>
        <Link className='item-link' to={`/estate/${estate.estateType}/${estate._id}`}>
          <EstateMainImage image='http://via.placeholder.com/150x140' />
          <div className='estate-information'>
            <span>{estate.estateType}</span>
            <span>{estate.price}</span>
            <span>{estate.currency} </span>
            <span>{estate.quadrature} </span>
          </div>
        </Link>
        <div onClick={this.openImageCarousel} className='all-images-btn'>
        </div>
        {this.createFavouritesButton(estate, isAddedToFavs)}
        <DealModal
          header='Image Carousel'
          open={openCarousel}
          size='large'
          onClose={this.closeImageCarousel}
        >
          <ImageModalCarousel estate={estate} onClose={this.closeImageCarousel} />
        </DealModal>
      </div>
    )
  }
}

BuyEstateItem.defaultProps = {
  user: {}
}

const mapStateToProps = (state) => {

  const props = {
    user: state.user.user
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyEstateItem)
