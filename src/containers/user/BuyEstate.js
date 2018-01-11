import React, { Component } from 'react'
import * as ACTIONS from 'actions'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import Footer from 'components/generics/main-footer/Footer'
import Header from 'components/generics/main-header/Header'
import BuyEstateType from 'components/buy-estate-types/BuyEstateTypes'
import EstateRefinements from 'components/estate-refinements/EstateRefinements'
import BuyEstateGrid from 'components/buy-estate-grid/BuyEstateGrid'
import SearchIndex from 'components/search-index/SearchIndex'
import { getQuery } from 'libs/deal-query'
import t from 'translations'

class BuyEstate extends Component {

  render() {

    return (
      <div>
        <Header />
        <SearchIndex>
          <BuyEstateType link='buy-estate' />
          <div ref='grid'>
            <EstateRefinements estateType={null}/>
            <div className='col col-lg-70 col-xs-100'>
              <BuyEstateGrid />
            </div>
          </div>
        </SearchIndex>
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

export default withRouter(connect(null, mapDispatchToProps)(BuyEstate))
