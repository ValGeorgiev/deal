import React, { Component } from 'react'
import config from 'config'
import './municipalitymap.scss'

const MAP_CLASS = 'municipality-map__map'
const MAP_NAME_ID = 'municipality-map__name'
const MAP_SELECTED_ID = 'municipality-map__selected'

class MunicipalityMap extends Component {

  componentDidMount() {
    const municipality = window.localStorage.getItem('mname')
    initMunicipalitiesMap(config[municipality], `.${MAP_CLASS}`, MAP_NAME_ID, MAP_SELECTED_ID)
  }

  render() {

    return (
      <div className='municipality-map__wrapper col col-xs-100 col-md-50'>
        <span className='municipality-map__title'>

        </span>
        <span id={MAP_NAME_ID} />
        <span id={MAP_SELECTED_ID} className='hide' />
        <div className={MAP_CLASS} />
      </div>
    )
  }
}

export default MunicipalityMap
