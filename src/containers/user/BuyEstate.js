import React, { Component } from 'react'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import Footer from '../../components/generics/main-footer/Footer'
import Header from '../../components/generics/main-header/Header'
import BuyEstateType from '../../components/buy-estate-types/BuyEstateTypes'
import EstateRefinements from '../../components/estate-refinements/EstateRefinements'
import BuyEstateGrid from '../../components/buy-estate-grid/BuyEstateGrid'
import { getQuery } from '../../libs/deal-query'

import t from '../../translations'

class BuyEstate extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const {
      actions
    } = this.props

    actions.getEstates({
      type: getQuery(nextProps.location.search)
    })
  }

  componentWillMount() {

    const {
      actions,
      location
    } = this.props

    actions.getEstates({
      type: getQuery(location.search)
    })
  }

  render() {

    return (
      <div>
        <Header />
        <BuyEstateType />
        <div>
          <EstateRefinements estateType={null}/>
          <BuyEstateGrid />
        </div>
        <Footer />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default withRouter(connect(null, mapDispatchToProps)(BuyEstate))

