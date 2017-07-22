import React, { Component } from 'react'
import { Route } from 'react-router'
import Home from '../containers/Home'

class RouteList extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    )
  }
}

export default RouteList
