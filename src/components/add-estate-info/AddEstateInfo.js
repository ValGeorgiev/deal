import React, { Component } from 'react'
import t from 'translations'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './addestateinfo.scss'

const ESTATE_TYPES = {
  apartament: 'apartament',
  house: 'house',
  bussiness: 'bussiness',
  hotel: 'hotel',
  faculty: 'faculty',
  sports: 'sports',
  field: 'field'
}

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
      estateType: ESTATE_TYPES.apartament,
      additionalType: 'one-room',
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
      additionalType,
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
      additionalType,
      estateType
    })
  }

  componentWillReceiveProps(nextProps) {

    const {
      error
    } = nextProps

    if (error) {
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

  selectType(type, innerType) {

    this.setState({
      estateType: type,
      additionalType: innerType
    })
  }

  returnType(type) {
    if (type === this.state.estateType) {
      return 'btn-blue'
    }
    return ''
  }

  checkEstateInnerType(type) {

    if (type === this.state.additionalType) {
      return true
    }
    return false
  }

  selectEstateInnerType(type) {
    this.setState({
      additionalType: type
    })
  }

  handleChangeInput(event, type) {
    let object = {}
    object[type] = event.target.value
    this.setState(object)
  }

  createInnerTypes() {
    const {
      estateType
    } = this.state

    switch(estateType) {
      case ESTATE_TYPES.apartament: {
        return (
          <div>
            <label><input onChange={() => this.selectEstateInnerType('one-room')} checked={this.checkEstateInnerType('one-room')} type='radio' value='one-room' name='apartament-type' /> Едностаен </label>
            <label><input onChange={() => this.selectEstateInnerType('two-rooms')} checked={this.checkEstateInnerType('two-rooms')} type='radio' value='two-rooms' name='apartament-type' /> Двустаен </label>
            <label><input onChange={() => this.selectEstateInnerType('three-rooms')} checked={this.checkEstateInnerType('three-rooms')} type='radio' value='three-rooms' name='apartament-type' /> Тристаен </label>
            <label><input onChange={() => this.selectEstateInnerType('four-rooms')} checked={this.checkEstateInnerType('four-rooms')} type='radio' value='four-rooms' name='apartament-type' /> Четиристаен </label>
            <label><input onChange={() => this.selectEstateInnerType('many-rooms')} checked={this.checkEstateInnerType('many-rooms')} type='radio' value='many-rooms' name='apartament-type' /> Многостаен </label>
            <label><input onChange={() => this.selectEstateInnerType('maisonette')} checked={this.checkEstateInnerType('maisonette')} type='radio' value='maisonette' name='apartament-type' /> Мезонет </label>
            <label><input onChange={() => this.selectEstateInnerType('threesonette')} checked={this.checkEstateInnerType('threesonette')} type='radio' value='threesonette' name='apartament-type' /> Тризонет </label>
            <label><input onChange={() => this.selectEstateInnerType('room')} checked={this.checkEstateInnerType('room')} type='radio' value='room' name='apartament-type' /> Стая </label>
            <label><input onChange={() => this.selectEstateInnerType('atelier')} checked={this.checkEstateInnerType('atelier')} type='radio' value='atelier' name='apartament-type' /> Ателие </label>
          </div>
        )
      }
      case ESTATE_TYPES.house: {
        return (
          <div>
            <label><input onChange={() => this.selectEstateInnerType('one-floor')} checked={this.checkEstateInnerType('one-floor')} type='radio' value='one-floor' name='house-type' /> Едноетажна </label>
            <label><input onChange={() => this.selectEstateInnerType('two-floors')} checked={this.checkEstateInnerType('two-floors')} type='radio' value='two-floors' name='house-type' /> Двуетажна </label>
            <label><input onChange={() => this.selectEstateInnerType('three-floors')} checked={this.checkEstateInnerType('three-floors')} type='radio' value='three-floors' name='house-type' /> Триетажна </label>
            <label><input onChange={() => this.selectEstateInnerType('many-floors')} checked={this.checkEstateInnerType('many-floors')} type='radio' value='many-floors' name='house-type' /> Многоетажна </label>
            <label><input onChange={() => this.selectEstateInnerType('floor-house')} checked={this.checkEstateInnerType('floor-house')} type='radio' value='floor-house' name='house-type' /> Етаж от къща </label>
            <label><input onChange={() => this.selectEstateInnerType('semi-detached')} checked={this.checkEstateInnerType('semi-detached')} type='radio' value='semi-detached' name='house-type' /> На калкан </label>
            <label><input onChange={() => this.selectEstateInnerType('whole-house')} checked={this.checkEstateInnerType('whole-house')} type='radio' value='whole-house' name='house-type' /> Самостоятелна </label>
          </div>
        )
      }
      case ESTATE_TYPES.hotel: {
        return (
          <div>
            <label><input onChange={() => this.selectEstateInnerType('spa')} checked={this.checkEstateInnerType('spa')} type='radio' value='spa' name='hotel-type' /> Спа</label>
            <label><input onChange={() => this.selectEstateInnerType('for-rest')} checked={this.checkEstateInnerType('for-rest')} type='radio' value='for-rest' name='hotel-type' /> Почивни</label>
          </div>
        )
      }
      case ESTATE_TYPES.bussiness: {
        return (
          <div>
            <label><input onChange={() => this.selectEstateInnerType('office')} checked={this.checkEstateInnerType('office')} type='radio' value='office' name='bussiness-type' /> Офис </label>
            <label><input onChange={() => this.selectEstateInnerType('store')} checked={this.checkEstateInnerType('store')} type='radio' value='store' name='bussiness-type' /> Магазин </label>
            <label><input onChange={() => this.selectEstateInnerType('restaurant')} checked={this.checkEstateInnerType('restaurant')} type='radio' value='restaurant' name='bussiness-type' /> Ресторант </label>
          </div>
        )
      }
      case ESTATE_TYPES.sports: {
        return (
          <div>
            <label><input onChange={() => this.selectEstateInnerType('fitness')} checked={this.checkEstateInnerType('fitness')} type='radio' value='fitness' name='sports-type' /> Фитнес зала </label>
            <label><input onChange={() => this.selectEstateInnerType('gym')} checked={this.checkEstateInnerType('gym')} type='radio' value='gym' name='sports-type' /> Салон </label>
            <label><input onChange={() => this.selectEstateInnerType('pool')} checked={this.checkEstateInnerType('pool')} type='radio' value='pool' name='sports-type' /> Басейн </label>
            <label><input onChange={() => this.selectEstateInnerType('sport-field')} checked={this.checkEstateInnerType('sport-field')} type='radio' value='sport-field' name='sports-type' /> Игрище </label>
          </div>
        )
      }
      case ESTATE_TYPES.faculty: {
        return (
          <div>
            <label><input onChange={() => this.selectEstateInnerType('warehouse')} checked={this.checkEstateInnerType('warehouse')} type='radio' value='warehouse' name='faculty-type' /> Склад</label>
            <label><input onChange={() => this.selectEstateInnerType('faculty')} checked={this.checkEstateInnerType('faculty')} type='radio' value='faculty' name='faculty-type' /> Завод</label>
            <label><input onChange={() => this.selectEstateInnerType('saloon')} checked={this.checkEstateInnerType('saloon')} type='radio' value='saloon' name='faculty-type' /> Салон</label>
          </div>
        )
      }
      case ESTATE_TYPES.field: {
        return (
          <div>
            <label><input onChange={() => this.selectEstateInnerType('land')} checked={this.checkEstateInnerType('land')} type='radio' value='land' name='field-type' /> Земеделска земя</label>
            <label><input onChange={() => this.selectEstateInnerType('home-building')} checked={this.checkEstateInnerType('home-building')} type='radio' value='home-building' name='field-type' /> За жилищно строителство</label>
            <label><input onChange={() => this.selectEstateInnerType('faculty-building')} checked={this.checkEstateInnerType('faculty-building')} type='radio' value='faculty-building' name='field-type' /> За промишлено строителство</label>
          </div>
        )
      }
    }
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
                <button className={`btn ${this.returnType(ESTATE_TYPES.apartament)}`} onClick={() => this.selectType('apartament', 'one-room')}>Апартаменти</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType(ESTATE_TYPES.house)}`} onClick={() => this.selectType('house', 'one-floor')}>Къщи</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType(ESTATE_TYPES.bussiness)}`} onClick={() => this.selectType('bussiness', 'office')}>Бизнес имоти</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType(ESTATE_TYPES.hotel)}`} onClick={() => this.selectType('hotel', 'spa')}>Хотели</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType(ESTATE_TYPES.faculty)}`} onClick={() => this.selectType('faculty', 'warehouse')}>Производствени помещения</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType(ESTATE_TYPES.sports)}`} onClick={() => this.selectType('sports', 'fitness')}>Спортни съоръжения</button>
              </div>
              <div className='type-wrapper'>
                <button className={`btn ${this.returnType(ESTATE_TYPES.field)}`} onClick={() => this.selectType('field', 'land')}>Парцели</button>
              </div>
            </div>
            <div className='more-type__wrapper'>
              {this.createInnerTypes()}
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

  const props = {
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
