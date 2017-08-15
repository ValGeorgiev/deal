import React, { Component } from 'react'
import t from '../../translations'
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
      moreInfo: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleSubmit() {
    this.setState({
      readyClass: true
    })

    setTimeout(() => {
      this.setState({
        readyState: true
      })
    }, 2200)
  }

  handleEdit() {
    this.setState({
      readyClass: false,
      readyState: false
    })
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
      price
    } = this.state

    const animationClass = readyClass ? 'start-animation' : ''

    return (
      <div className="add-estate-info__wrapper">
        <div className={`${animationClass} info__wrapper`}>
          <h3 className='info__title'>Информация за имота</h3>
          <div>
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
                  <select>
                    <option value='euro'>€</option>
                    <option value='dollar'>$</option>
                    <option value='lev'>лв</option>
                  </select>
                </label>
              </div>
              <div className='input-wrapper'>
                <label>
                  Вид строителство:
                  <select>
                    <option value='brick'>тухла</option>
                    <option value='panel'>панел</option>
                    <option value='epk'>ЕПК</option>
                    <option value='gradored'>градоред</option>
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

export default AddEstateInfo