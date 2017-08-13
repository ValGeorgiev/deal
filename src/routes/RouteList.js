import React, { Component } from 'react'
import { Route } from 'react-router'
import Home from '../containers/user/Home'
import AddEstate from '../containers/user/AddEstate'
import AdminHome from '../containers/admin/AdminHome'

class RouteList extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/add-estate" component={AddEstate} />
      </div>
    )
  }
}

export default RouteList
