import React, { Component } from 'react'

import RouteList from './RouteList'

// import global styles

class RouteRoot extends Component {
  render() {
    return (
      <RouteList {...this.props} />
    )
  }
}

export default RouteRoot
