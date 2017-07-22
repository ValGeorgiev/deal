import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {} from '../actions'

class Home extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        Home Container
      </div>
    )
  }
}

Home.propTypes = {
  actions: PropTypes.shape({})
}

function mapStateToProps(state) {
  const props = {}
  return props
}

function mapDispatchToProps(dispatch) {
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
