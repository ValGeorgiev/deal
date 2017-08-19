import React, { Component } from 'react'
import t from '../../translations'
import * as ACTIONS from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './addestateinfo.scss'

class AddEstateInfo extends Component {
  constructor() {
    super()

    this.state = {
      readyState: false,
      readyClass: false,
      quadrature: '',
      floor: '',
      allFloors: '',
      price: '',
      buildingYear: '',
      moreInfo: '',
      buildingType: 'brick',
      currency: '€',
      estateType: 'appartament'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleSubmit() {
    const {
      quadrature,
      buildingYear,
      moreInfo,
      floor,
      allFloors,
      price,
      buildingType,
      currency,
      estateType
    } = this.state


    this.props.actions.addEstateInformation({
      quadrature,
      buildingYear,
      moreInfo,
      floor,
      allFloors,
      price,
      buildingType,
      currency,
      estateType
    })
  }

  componentWillReceiveProps(nextProps) {

    const {
      success
    } = nextProps

    if (success) {
      this.startAnimation()
    }
  }

  startAnimation() {
    const {
      change
    } = this.props

    this.setState({
      readyClass: true
    })

    setTimeout(() => {
      this.setState({
        readyState: true
      })
      change({
        activeAddEstateUser: false,
        activeAddEstateInfo: false,
        activeAddEstateAddress: true
      })
    }, 2200)
  }

  handleEdit() {
    this.setState({
      readyClass: false,
      readyState: false
    })
  }

  selectType(type) {
    this.setState({
      estateType: type
    })
  }

  returnType(type) {
    if (type === this.state.estateType) {
      return 'btn-blue'
    }
    return ''
  }

  handleChangeInput(event, type) {
    let object = {}
    object[type] = event.target.value
    this.setState(object)
  }

  render() {
    const {
      readyState,
      readyClass,
      quadrature,
      buildingYear,
      moreInfo,
      floor,
      allFloors,
      price,
      buildingType,
      currency,
      estateType
    } = this.state

    const {
      error,
      active
    } = this.props

    let activeClass = active ? '' : 'not-active'

    const animationClass = readyClass ? 'start-animation' : ''

    return (
      <div className="add-estate-info__wrapper">
        <div className={`${animationClass} info__wrapper`}>
          <div className={`shallow-block ${activeClass}`} />
          <h3 className='info__title'>Информация за имота</h3>
          <div>
            <div className='estate_type__wrapper'>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType('appartament')}`} onClick={() => this.selectType('appartament')}>Апартаменти</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType('house')}`} onClick={() => this.selectType('house')}>Къщи</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType('bussiness')}`} onClick={() => this.selectType('bussiness')}>Бизнес имоти</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType('hotel')}`} onClick={() => this.selectType('hotel')}>Хотели</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType('faculty')}`} onClick={() => this.selectType('faculty')}>Производствени помещения</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType('sports')}`} onClick={() => this.selectType('sports')}>Спортни съоръжения</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType('field')}`} onClick={() => this.selectType('field')}>Парцели</button>
              </div>
            </div>
            <div className='floor__wrapper'>
              <div className='input-wrapper'>
                <label>
                  Квадратура:
                  <input onChange={(event) => this.handleChangeInput(event, 'quadrature')} value={quadrature} type='number' />
                </label>
              </div>
              <div className='input-wrapper'>
                <label>
                  Етаж:
                  <input  onChange={(event) => this.handleChangeInput(event, 'floor')} value={floor} type='number' />
                </label>
              </div>
              <div className='input-wrapper'>
                <label>
                  Етажност:
                  <input  onChange={(event) => this.handleChangeInput(event, 'allFloors')} value={allFloors} type='number' />
                </label>
              </div>
            </div>
            <div className='price-building__wrapper'>
              <div className='input-wrapper'>
                <label>
                  Цена:
                  <input  onChange={(event) => this.handleChangeInput(event, 'price')} value={price} type='number' />
                </label>
              </div>
              <div className='input-wrapper'>
                <label>
                  Валута:
                  <select value={currency} onChange={(event) => this.handleChangeInput(event, 'currency')}>
                    <option default value='€'>€</option>
                    <option value='$'>$</option>
                    <option value='лв'>лв</option>
                    <option value='£'>£</option>
                  </select>
                </label>
              </div>
              <div className='input-wrapper'>
                <label>
                  Вид строителство:
                  <select value={buildingType} onChange={(event) => this.handleChangeInput(event, 'buildingType')}>
                    <option default value='brick'>тухла</option>
                    <option value='panel'>панел</option>
                    <option value='epk'>ЕПК</option>
                    <option value='beamworkn'>градоред</option>
                    <option value='PK'>ПК</option>
                  </select>
                </label>
              </div>
              <div className='input-wrapper'>
                <label>
                  Година на строителство:
                  <input onChange={(event) => this.handleChangeInput(event, 'buildingYear')} value={buildingYear} type='number' />
                </label>
              </div>
            </div>
            <div className='more__wrapper'>
              <div className='input-wrapper'>
                <label htmlFor='additional-info'>
                  Допълнителна информация:
                </label>
                <textarea onChange={(event) => this.handleChangeInput(event, 'moreInfo')} value={moreInfo} id='additional-info' />
              </div>
            </div>
          </div>
          {!!error ?
            (
              <div>
                <p>{error}</p>
              </div>
            ) : null

          }
          <div className='info-btn__wrapper'>
            <button onClick={this.handleSubmit} className='btn btn-big btn-blue'>Продължи</button>
          </div>
        </div>
        {!!readyState ? (
          <div className='ready-state'>
            <p>Информацията е записана! Продължете със следващата стъпка!</p>
            <span onClick={this.handleEdit}>Промени</span>
          </div> ) : null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */

  const props = {
    success: state.estate.success,
    error: state.estate.message
  }
  return props
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default connect(mapStateToProps, mapDispatchToProps)(AddEstateInfo)
