import React, { Component } from 'react'
import t from '../../translations'
import { Link } from 'react-router-dom'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './favouritesgriditem.scss'

class FavouritesGridItem extends Component {
  constructor() {
    super()
  }

  deleteEstateFromFavourites(id) {
    const {
      actions
    } = this.props

    actions.removeFromFavourites(id)
  }

  render() {
    const {
      estate,
      user
    } = this.props

    if (user.favourites && !user.favourites.includes(estate._id)) {
      return null
    }

    return (
      <div className='favourites-item__wrapper'>
        <Link className='item-link' to={`/estate/${estate.estateType}/${estate._id}`}>
          <div className='estate-image'>
            <img src='http://via.placeholder.com/200x180' />
          </div>
          <div className='estate-information'>
            <span>Тип: {estate.estateType} </span>
            <span>Цена: {estate.price}</span>
            <span>{estate.currency} </span>
            <span>Кв.: {estate.quadrature} </span>
          </div>
        </Link>
        <button onClick={() => this.deleteEstateFromFavourites(estate._id)}>Премахни</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  // console.log(state)

  const props = {
    user: state.getUser.user
  }
  return props
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default connect(mapStateToProps, mapDispatchToProps)(FavouritesGridItem)
