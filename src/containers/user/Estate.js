import React, { Component } from 'react'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from 'components/generics/main-footer/Footer'
import EstateDetails from 'components/estate-details/EstateDetails'
import Header from 'components/generics/main-header/Header'
import t from 'translations'
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
      estates,
      match,
      actions
    } = this.props

    if (estates && estates.length > 0) {
      let length = estates.length

      for (let i = 0; i < length; i++) {
        if (estates[i]._id === match.params.id) {
          this.setState({
            estate: estates[i]
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

const mapStateToProps = (state) => {

  const props = {
    estates: state.estate.estates,
    estate: state.estate.estate
  }
  return props
}

const mapDispatchToProps = (dispatch) => {

  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Estate)

