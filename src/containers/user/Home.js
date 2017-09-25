import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import Footer from 'components/generics/main-footer/Footer'
import Header from 'components/generics/main-header/Header'
import HomeMap from 'components/home-map/HomeMap'
import HomeCarousel from 'components/home-carousel/HomeCarousel'
import HomeMapButtons from 'components/home-map-buttons/HomeMapButtons'
import HomeNavigation from 'components/home-navigation/HomeNavigation'
import t from 'translations'
import 'slick-carousel/slick/slick.css'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      city: '',
      region: ''
    }
  }

  componentWillMount() {
    const {
      actions
    } = this.props

    actions.getEstates({
      count: 10
    })

  }

  selectRegion(that, selectedCity) {
    const {
      city,
      region
    } = this.state

    let name = selectedCity.name || ''
    let municipality = selectedCity.region || ''

    if (city === name) {
      d3.select(that).attr('id', '')
      this.setState({
        city: '',
        region: ''
      })
    } else {
      let selected = document.getElementById('selected')

      if (selected !== null) {
        selected.id = ''
      }

      this.setState({
        city: name,
        region: municipality
      })
      d3.select(that).attr('id', 'selected')
    }
  }

  componentDidMount() {
    initMaps(this.selectRegion.bind(this))
  }

  render() {
    const {
      city,
      region
    } = this.state

    return (
      <div>
        <Header />
        <HomeNavigation />
        <div className='home-content'>
          <HomeMap />
          <HomeMapButtons name={city} region={region} />
        </div>
        <HomeCarousel />
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(null, mapDispatchToProps)(Home)
