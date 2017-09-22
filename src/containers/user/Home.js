import React, { Component } from 'react'
import Footer from 'components/generics/main-footer/Footer'
import Header from 'components/generics/main-header/Header'
import HomeMap from 'components/home-map/HomeMap'
import HomeMapButtons from 'components/home-map-buttons/HomeMapButtons'
import HomeNavigation from 'components/home-navigation/HomeNavigation'
import t from 'translations'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      region: ''
    }
  }

  selectRegion(that, { name }) {
    const {
      region
    } = this.state

    if (region === name) {
      d3.select(that).attr('id', '')
      this.setState({
        region: ''
      })
    } else {
      let selected = document.getElementById('selected')

      if (selected !== null) {
        selected.id = ''
      }

      this.setState({
        region: name
      })
      d3.select(that).attr('id', 'selected')
    }
  }

  componentDidMount() {
    initMaps(this.selectRegion.bind(this))
  }

  render() {
    const {
      region
    } = this.state

    return (
      <div>
        <Header />
        <HomeNavigation />
        <HomeMap />
        <HomeMapButtons name={region} />
        Home Container
        <Footer />
      </div>
    )
  }
}

export default Home
