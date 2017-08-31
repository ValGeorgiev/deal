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
      actions
    } = this.props

    actions.getFavouritesEstates()
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
export default connect(mapStateToProps, mapDispatchToProps)(Favourites)

