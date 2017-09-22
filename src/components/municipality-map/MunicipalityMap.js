import React, { Component } from 'react'
import config from 'config'
import { withRouter } from 'react-router-dom'
import { parseQuery } from 'libs/deal-query'
import './municipalitymap.scss'

const MAP_CLASS = 'municipality-map__map'
const MAP_NAME_ID = 'municipality-map__name'
const MAP_SELECTED_ID = 'municipality-map__selected'

class MunicipalityMap extends Component {

  componentDidMount() {
    const query = parseQuery(this.props.location.search)
    initMunicipalitiesMap(config[query['city']], `.${MAP_CLASS}`, MAP_NAME_ID, MAP_SELECTED_ID)
  }

  render() {

    return (
      <div className='municipality-map__wrapper col col-xs-100 col-md-50'>
        <span className='municipality-map__title'>

        </span>
        <span id={MAP_NAME_ID} />
        <input id={MAP_SELECTED_ID} className='hide' />
        <div className={MAP_CLASS} />
      </div>
    )
  }
}

export default withRouter(MunicipalityMap)
