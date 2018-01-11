import React, { Component } from 'react'
import t from 'translations'
import { Link } from 'react-router-dom'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './favouritesgriditem.scss'

class FavouritesGridItem extends Component {

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
        { user ? (
            <button onClick={() => this.deleteEstateFromFavourites(estate._id)}>Премахни</button>
          ) : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  const props = {
    user: state.user.user
  }
  return props
}
const mapDispatchToProps = (dispatch) => {

  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesGridItem)
