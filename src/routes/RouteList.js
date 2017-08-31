import React, { Component } from 'react'
import { Route } from 'react-router'
import Home from '../containers/user/Home'
import AddEstate from '../containers/user/AddEstate'
import BuyEstate from '../containers/user/BuyEstate'
import Estate from '../containers/user/Estate'
import Profile from '../containers/user/Profile'
import Favourites from '../containers/user/Favourites'
import AdminHome from '../containers/admin/AdminHome'

class RouteList extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/add-estate" component={AddEstate} />
        <Route exact path="/buy-estate" component={BuyEstate} />
        <Route exact path="/estate/:type/:id" component={Estate} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/favourites" component={Favourites} />
      </div>
    )
  }
}

export default RouteList
