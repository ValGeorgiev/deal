import React, { Component } from 'react'
import { Route } from 'react-router'
import Home from '../containers/user/Home'
import AdminHome from '../containers/admin/AdminHome'

class RouteList extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={AdminHome} />
      </div>
    )
  }
}

export default RouteList
