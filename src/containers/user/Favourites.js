import React, { Component } from 'react'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Footer from '../../components/generics/main-footer/Footer'
import Header from '../../components/generics/main-header/Header'
import FavouritesGrid from '../../components/favourites-grid/FavouritesGrid'
import t from '../../translations'

class Favourites extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {

    const {
      actions,
      match
    } = this.props

    actions.getFavouritesEstates(match.params.favouritesid)
  }

  render() {

    return (
      <div>
        <Header />
        <FavouritesGrid />
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(null, mapDispatchToProps)(Favourites)
