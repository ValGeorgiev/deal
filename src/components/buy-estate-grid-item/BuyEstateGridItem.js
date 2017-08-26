import React, { Component } from 'react'
import t from '../../translations'
import { Link } from 'react-router-dom'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DealModal from '../generics/deal-modal/DealModal'
import ImageModalCarousel from '../image-modal-carousel/ImageModalCarousel'

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

  render() {
    const {
      estate
    } = this.props

    const {
      openCarousel
    } = this.state

    return (
      <div className={`buy-estate-item__wrapper ${openCarousel ? 'modal' : ''}`}>
        <Link className='item-link' to={`/estate/${estate.estateType}/${estate._id}`}>
          <div className='estate-image'>
            <img src='http://via.placeholder.com/150x140' />
          </div>
          <div className='estate-information'>
            <span>Тип: {estate.estateType} </span>
            <span>Цена: {estate.price} </span>
            <span>Кв.: {estate.quadrature} </span>
          </div>
        </Link>
        <div onClick={this.openImageCarousel} className='all-images-btn'>
        </div>
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

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */

  const props = {
  }
  return props
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default connect(mapStateToProps, mapDispatchToProps)(BuyEstateItem)
