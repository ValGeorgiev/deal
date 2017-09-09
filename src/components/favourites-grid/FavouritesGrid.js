import React, { Component } from 'react'
import t from '../../translations'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import FavouritesGridItem from '../favourites-grid-item/FavouritesGridItem'
import Loading from '../generics/loading/Loading'
import './favouritesgrid.scss'

class FavouritesGrid extends Component {
  constructor() {
    super()
  }

  createChildren() {
    const {
      favourites
    } = this.props

    if (favourites) {

      if (favourites.length === 0) {
        return (
          <div>
            Няма такива имоти!
          </div>
        )
      } else {

        return favourites.map((estate) => {
          return (
            <div key={estate._id} className='col col-xs-100'>
              <FavouritesGridItem estate={estate} />
            </div>
          )
        })
      }
    } else {
      return <Loading row />
    }
  }

  render() {

    return (
      <div className="favourites-grid__wrapper col col-xs-100">
        <h3 className='grid__title'>Любими имоти</h3>
        <div className='estate_grid__wrapper'>
          {this.createChildren()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  const props = {
    favourites: state.getFavourites.favourites
  }
  return props
}

export default connect(mapStateToProps)(FavouritesGrid)
