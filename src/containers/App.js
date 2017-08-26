import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import RouteRoot from '../routes/RouteRoot'
import * as ACTIONS from '../actions/'

/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {
      actions,
      router
    } = this.props
    return (
      <div>
        <RouteRoot
          actions={actions}
          router={router} />
      </div>
    )
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({}),
  router: PropTypes.shape({})
};

function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    router: state.router
  }
  return props
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
