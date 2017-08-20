import React, { Component } from 'react'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Footer from '../../components/generics/main-footer/Footer'
import Header from '../../components/generics/main-header/Header'
import BuyEstateType from '../../components/buy-estate-types/BuyEstateTypes'
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

    this.setState({
      estateType: type
    })

    actions.getEstates({
      type
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
        <BuyEstateGrid />
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

