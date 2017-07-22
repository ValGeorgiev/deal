import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import t from '../translations'
import {} from '../actions'

class Home extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <span className='btn'>Span to Btn</span> <br/>
        <button className='btn'>Button to Btn</button>  <br/>
        <button className='btn btn-small'>Login</button> <br/>
        <button className='btn btn-medium'>Login</button> <br/>
        <button className='btn btn-big'>Login</button> <br/>
        <br/>
        <br/>
        <h1> Hello world </h1>
        <h1 className="light"> Hello world </h1>
        <h2> Hello world </h2>
        <h2 className="light"> Hello world </h2>
        <h3> Hello world </h3>
        <h3 className="light"> Hello world </h3>
        <h4> Hello world </h4>
        <h4 className="light"> Hello world </h4>
        <h5> Hello world </h5>
        <h5 className="light"> Hello world </h5>
        <h6> Hello world </h6>
        <h6 className="light"> Hello world </h6>
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
