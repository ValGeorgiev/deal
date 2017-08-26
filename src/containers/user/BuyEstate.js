import React, { Component } from 'react'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Footer from '../../components/generics/main-footer/Footer'
import Header from '../../components/generics/main-header/Header'
import BuyEstateType from '../../components/buy-estate-types/BuyEstateTypes'
import EstateRefinements from '../../components/estate-refinements/EstateRefinements'
import BuyEstateGrid from '../../components/buy-estate-grid/BuyEstateGrid'
import t from '../../translations'

class BuyEstate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      estateType: 'appartament'
    }
  }

  componentWillMount() {

    const {
      estateType
    } = this.state

    const {
      actions
    } = this.props

    actions.getEstates({
      type: estateType
    })
  }

  updateEstateType(type) {
    const {
      actions
    } = this.props

    let {
      estateType
    } = this.state

    let types = estateType.split(',')
    let index = types.indexOf(type)

    if (index > -1) {
      types.splice(index, 1)
    } else if (type.length > 0) {
      types.push(type)
    }

    let stateTypes = types.join(',')
    this.setState({
      estateType: stateTypes
    })

    if (stateTypes[0] === ',') {
      stateTypes = stateTypes.substr(1)
    }

    actions.getEstates({
      type: stateTypes
    })
  }

  render() {
    const {
      estateType
    } = this.state

    return (
      <div>
        <Header />
        <BuyEstateType estateType={estateType} updateType={(type) => this.updateEstateType(type)} />
        <div>
          <EstateRefinements />
          <BuyEstateGrid />
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(BuyEstate)

