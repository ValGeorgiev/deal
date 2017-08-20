import React, { Component } from 'react'
import t from '../../translations'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './buyestatetypes.scss'

class BuyEstateTypes extends Component {

  returnType(type) {
    if (this.props.estateType.includes(type)) {
      return 'btn-blue'
    }
    return ''
  }

  render() {
    const {
      estateType,
      updateType
    } = this.props

    return (
      <div className="buy-estate-types__wrapper">
        <h3 className='types__title'>Избери тип</h3>
        <div className='estate_type__wrapper'>
          <div className='type-wrapper'>
            <button className={`btn ${this.returnType('appartament')}`} onClick={() => updateType('appartament')}>Апартаменти</button>
          </div>
          <div className='type-wrapper'>
            <button className={`btn ${this.returnType('house')}`} onClick={() => updateType('house')}>Къщи</button>
          </div>
          <div className='type-wrapper'>
            <button className={`btn ${this.returnType('bussiness')}`} onClick={() => updateType('bussiness')}>Бизнес имоти</button>
          </div>
          <div className='type-wrapper'>
            <button className={`btn ${this.returnType('hotel')}`} onClick={() => updateType('hotel')}>Хотели</button>
          </div>
          <div className='type-wrapper'>
            <button className={`btn ${this.returnType('faculty')}`} onClick={() => updateType('faculty')}>Производствени помещения</button>
          </div>
          <div className='type-wrapper'>
            <button className={`btn ${this.returnType('sports')}`} onClick={() => updateType('sports')}>Спортни съоръжения</button>
          </div>
          <div className='type-wrapper'>
            <button className={`btn ${this.returnType('field')}`} onClick={() => updateType('field')}>Парцели</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(BuyEstateTypes)
