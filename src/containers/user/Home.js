import React, { Component } from 'react'
import Footer from 'components/generics/main-footer/Footer'
import Header from 'components/generics/main-header/Header'
import HomeMap from 'components/home-map/HomeMap'
import HomeMapButtons from 'components/home-map-buttons/HomeMapButtons'
import HomeNavigation from 'components/home-navigation/HomeNavigation'
import t from 'translations'

class Home extends Component {

  componentDidMount() {
    initMaps()
  }

  render() {
    return (
      <div>
        <Header />
        <HomeNavigation />
        <HomeMap />
        <HomeMapButtons />
        Home Container
        <Footer />
      </div>
    )
  }
}

export default Home
