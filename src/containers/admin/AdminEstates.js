import React, { Component } from 'react'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AdminHeader from 'components/generics/admin-header/AdminHeader'
import AdminNavigation from 'components/admin/admin-navigation/AdminNavigation'
import BuyEstateType from 'components/buy-estate-types/BuyEstateTypes'
import EstateRefinements from 'components/estate-refinements/EstateRefinements'
import Estates from 'components/admin/estates/Estates'
import { getQuery } from 'libs/deal-query'
import t from 'translations'

class AdminEstates extends Component {
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
        <AdminHeader />
        <AdminNavigation />
        <BuyEstateType link='estates' />
        <div>
          <EstateRefinements estateType={null}/>
          <Estates />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(null, mapDispatchToProps)(AdminEstates)
