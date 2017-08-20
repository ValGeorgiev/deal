import React, { Component } from 'react'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Footer from '../../components/generics/main-footer/Footer'
import EstateDetails from '../../components/estate-details/EstateDetails'
import Header from '../../components/generics/main-header/Header'
import t from '../../translations'
import _ from 'lodash'

class Estate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      estate: {}
    }
  }

  componentWillMount() {
    const {
      estatesData,
      match,
      actions
    } = this.props

    if (estatesData && estatesData.estates && estatesData.estates.length > 0) {
      let length = estatesData.estates.length

      for (let i = 0; i < length; i++) {
        if (estatesData.estates[i]._id === match.params.id) {
          this.setState({
            estate: estatesData.estates[i]
          })
          break;
        }
      }
    } else {
      actions.getEstateByID(match.params.id)
    }
  }

  render() {
    const estate = _.isEmpty(this.state.estate) ? this.props.estate : this.state.estate

    return (
      <div>
        <Header />
        <EstateDetails estate={estate} />
        <Footer />
      </div>
    )
  }
}

Estate.defaultProps = {
  estate: {}
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */

  const props = {
    estatesData: state.getEstate.data,
    estate: state.getEstate.estate
  }
  return props
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Estate)

