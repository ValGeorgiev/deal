import React, { Component } from 'react'
import t from '../../translations'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { buildQuery } from '../../libs/deal-query'
import './buyestatetypes.scss'

class BuyEstateTypes extends Component {

  returnType(type) {
    if (this.props.location.search.includes(type)) {
      return 'btn-blue'
    }
    return ''
  }

  render() {
    const {
      location
    } = this.props

    return (
      <div className="buy-estate-types__wrapper">
        <h3 className='types__title'>Избери тип</h3>
        <div className='estate_type__wrapper'>
          <div className='type-wrapper'>
            <Link to={`buy-estate${buildQuery(location.search, 'type', 'appartament')}`}>
              <button className={`btn ${this.returnType('appartament')}`}>Апартаменти</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`buy-estate${buildQuery(location.search, 'type', 'house')}`}>
              <button className={`btn ${this.returnType('house')}`} >Къщи</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`buy-estate${buildQuery(location.search, 'type', 'bussiness')}`}>
              <button className={`btn ${this.returnType('bussiness')}`} >Бизнес имоти</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`buy-estate${buildQuery(location.search, 'type', 'hotel')}`}>
              <button className={`btn ${this.returnType('hotel')}`} >Хотели</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`buy-estate${buildQuery(location.search, 'type', 'faculty')}`}>
              <button className={`btn ${this.returnType('faculty')}`} >Производствени помещения</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`buy-estate${buildQuery(location.search, 'type', 'sports')}`}>
              <button className={`btn ${this.returnType('sports')}`} >Спортни съоръжения</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`buy-estate${buildQuery(location.search, 'type', 'field')}`}>
              <button className={`btn ${this.returnType('field')}`} >Парцели</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */

  const props = {
  }
  return props
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BuyEstateTypes))
