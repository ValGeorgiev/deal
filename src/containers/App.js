/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import RouteRoot from '../routes/RouteRoot'
import Footer from '../components/generics/main-footer/Footer'
import Header from '../components/generics/main-header/Header'
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
        <Header />
        <RouteRoot
          actions={actions}
          router={router} />
        <Footer />
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
export default connect(mapStateToProps, mapDispatchToProps)(App)
